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

    // Kevon helped me get the get request to render
    componentDidMount() {
        axios
          .get('https://wadebankingqa.herokuapp.com/topics')
          .then(response => this.setState({ topics: response.data }))
          window.addEventListener('click', this.handleClick)
          window.addEventListener('dblclick', this.handleDoubleClick)
    }

    componentWillUnmount() {
      window.removeEventListener('click', this.handleClick)
      window.removeEventListener('dblclick', this.handleDoubleClick)
    }

    // Kevon helped with .map to get my object to render
    render () {
      let topics = this.state.topics
        return (
            <div>
              {this.state.topics.map((topic, index) => {
                return <li key={index}>
                  <a href={'/topic/' + topic.title}>
                    {topic.title}
                  </a>
                </li>
              })}
            </div>
        )
    }
}

export default TopicsContainer
