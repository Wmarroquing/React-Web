import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-white">
        <a className="navbar-brand">
          <img src={logo} className="App-logo" alt="React"/>
          { this.props.title }
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li> 
        </ul>
        <div>
          <h5>
            Tareas
            <span className="badge badge-pill badge-primary ml-2">
              {this.props.estado}
            </span>
          </h5>
        </div>
      </nav>
    )
  }
}

export default Navigation;