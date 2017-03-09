import React, { Component } from 'react'
import './nav.css'

class Nav extends Component {
  render () {
    // const { mobile, children } = this.props
    return (
      <nav>
        <a href="#process">Process</a>
        <a href="#past">Past</a>
        <a href="#projects">Projects</a>
        <a href="#philosophy">Philosophy</a>
        <a href="#posts">Posts</a>
        <a href="#contact">Contact</a>
      </nav>
    )
  }
}

export default Nav
