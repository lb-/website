import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return (
      <section id="contact">
        <h2>Contact</h2>
        <a href="mailto:mail@lb.ee" className="btn btn-info btn-lg" role="button">
          <i className="fa fa-fw fa-envelope" aria-hidden="true"></i>
          mail@lb.ee
        </a>
        <h2>Socials</h2>
      </section>
    )
  }
}

export default Contact
