import React, { Component } from 'react'
import Header from './Header/Header.js'
import TopicsContainer from './Topics/TopicsContainer'
import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <TopicsContainer/>
      </div>
    )
  }
}

export default App
