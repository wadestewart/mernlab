import React, { Component } from 'react'
import Header from './Header/Header.js'
import TopicsContainer from './Topics/TopicsContainer'
import Post from './Post/Post'
import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <TopicsContainer/>
        <Post />
      </div>
    )
  }
}

export default App
