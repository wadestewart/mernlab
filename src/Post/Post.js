import React, { Component } from 'react'

class Post extends Component {
        state = {
            value: ''
        }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = (event0 => {
        console.log('A name was submitted: ' + this.state.value)
        event.preventDefault()
    })

    render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Post a Question
                            <input type='text' value={this.state.value} onchange={this.handleChange} />
                    </label>
                </form>
            </div>
        )
    }
}

export default Post
