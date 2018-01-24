import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './Header/Header.js'
import TopicsContainer from './Topics/TopicsContainer'
import Post from './Post/Post'
import './App.css'

class App extends Component {

// Stocks.js in react-router lab for .map to iterate through db - target key/values to set up routes below (TopicsContainer)
  render() {
    return (
      <Router>
        <div>
          <nav className='header'>
            <Header/>
          </nav>
          <main className='container'>
            <TopicsContainer/>
            <Post />
          </main>
        </div>
      </Router>
    )
  }
}

export default App
