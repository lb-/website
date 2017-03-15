import React, { Component } from 'react'
var FontAwesome = require('react-fontawesome');

class ContactItem extends Component {
  render () {
    return (
      <li>
        <FontAwesome
          name={this.props.icon}
          fixedWidth={true}
          className='fa-li'
          />
        <a href="{this.props.link}" className="btn btn-info btn-lg" role="button">
          {this.props.context ? <strong>{this.props.context}</strong> : ''}
          {this.props.text}
        </a>
      </li>
    )
  }
}


class Contact extends Component {
  render () {
    const contactData = [
      {text: 'mail@lb.ee', icon: 'envelope', link: 'mailto:mail@lb.ee'},
      {text: '/lb_ee', context: 'Telegram', icon: 'paper-plane-o', link: 'http://telegram.me/lb_ee'},
      {text: 'skype@lb.ee', icon: 'skype', link: 'skype:live:skype_7126?userinfo'},
    ]
    const contactItems = contactData.map((data, index) =>
      <ContactItem text={data.text} context={data.context} icon={data.icon} link={data.link} />
    );
    const socialData = [
      {text: '/@_lb_', context: 'Medium', icon: 'medium', link: 'https://medium.com/@_lb_'},
      {text: '/lb-', context: 'Goodreads', icon: 'book', link: 'https://www.goodreads.com/user/show/52107290-lb-ben-johnston'},
      {text: '/lb', context: 'Github', icon: 'github', link: 'https://github.com/lb'},
      {text: '/lbeeee', context: 'Beanhunter', icon: 'coffee', link: 'https://www.beanhunter.com/users/lbeeee'},
      {text: '/lbbenjohnston', context: 'Linkedin', icon: 'linkedin', link: 'https://www.linkedin.com/in/lbbenjohnston'},
    ]
    const socialItems = socialData.map((data, index) =>
      <ContactItem text={data.text} context={data.context} icon={data.icon} link={data.link} />
    );

    return (
      <section id="contact">
        <h3>Contact</h3>
        <ul className='fa-ul'>{contactItems}</ul>
        <h3>Socials</h3>
        <ul className='fa-ul'>{socialItems}</ul>
      </section>
    )
  }
}

export default Contact
