import React, { Component } from 'react'
import axios from 'axios'
import './Post.css'

class Post extends Component {
        state = {
            value: ''
        }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = (event) => {
        console.log('A topic was submitted: ' + this.state.value)
        event.preventDefault()
        axios
            .post('https://wadebankingqa.herokuapp.com/topics', {topic: { title: this.state.value }})
            .then(response => {
                console.log(response)
                this.setState({ value: this.state.value })})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className='post'>
                        Post a Topic
                        <input type='text' value={this.state.value} onChange={this.handleChange} />
                        <button type='submit'>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}

export default Post
