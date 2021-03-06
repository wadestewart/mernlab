import React, { Component } from 'react'
import axios from 'axios'
import './TopicsContainer.css'

class TopicsContainer extends Component {
        state = {
          topics        : [],
          currentIndex  : 0
        }

    // Kevon helped me get the get request to render
    componentDidMount() {
        axios
          .get('https://wadebankingqa.herokuapp.com/topics')
          .then(response => {
            console.log(this.state.topics)
            this.setState({ topics: response.data })})
    }

    // Kevon helped with .map to get my object to render
    render () {
      let topics = this.state.topics.map((topic, index) => {
                    return <li key={index} className='list'>
                            <a href={'/topic/' + topic.title}>
                                {topic.title}
                            </a>
                        </li>
                    })
        return (
            <div className='container'>
                {topics}
            </div>
        )
    }
}

export default TopicsContainer
