import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import RouteView from './router'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/home">首页</Link>
          <Link to="/hook">hook</Link>
          <RouteView></RouteView>
        </div>
      </Router>
    )
  }
}

export default App
