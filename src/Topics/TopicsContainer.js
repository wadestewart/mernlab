import React, { Component } from 'react'
import axios from 'axios'

class TopicsContainer extends Component {
    constructor (props) {
        super (props)
        this.state = {
          topics        : [],
          currentIndex  : 0
        }
    }

    // From flashcards lesson
    next = () => {
      let nextIndex = (this.state.currentIndex +1) !== this.state.topics.length
      ? this.state.currentIndex +1
      : this.state.currentIndex

      this.setState({ currentIndex: nextIndex })
    }

    prev = () => {
      let prevIndex = (this.state.currentIndex -1) < 0
      ? 0
      : (this.state.currentIndex -1)

      this.setState({ currentIndex: prevIndex })
    }

    handleClick = (event) => {
      if (event.click) this.next()
    }

    handleDoubleClick = (event) => {
      if (event.dblclick) this.prev()
    }

    componentDidMount() {
        axios
          .get('https://wadebankingqa.herokuapp.com/topics')
          .then(response => this.setState({ topics: response.data.title }))
          window.addEventListener('click', this.handleClick)
          window.addEventListener('dblclick', this.handleDoubleClick)
    }

    componentWillUnmount() {
      window.removeEventListener('click', this.handleClick)
      window.removeEventListener('dblclick', this.handleDoubleClick)
    }

    render () {
      let topic = this.state.topics[this.state.currentIndex]
        return (
            <div>
              <main>
                <div>
                  {topic}
                </div>
              </main>
            </div>
        )
    }
}

export default TopicsContainer
