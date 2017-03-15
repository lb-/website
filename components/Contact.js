import React, { Component } from 'react'
var FontAwesome = require('react-fontawesome');

class ContactItem extends Component {
  render () {
    return (
      <p class="control">
        <a href={this.props.link} className="button is-large is-outlined">
          <span className="icon is-medium">
            <FontAwesome
              name={this.props.icon}
              fixedWidth={true}
              tag='i'/>
          </span>
          <span>
            {this.props.context ? <strong>{this.props.context}</strong> : ''}
            {this.props.text}
          </span>
        </a>
      </p>
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
      <ContactItem
        text={data.text}
        context={data.context}
        icon={data.icon}
        link={data.link}
        key={index}
        />
    );
    const socialData = [
      {text: '/@_lb_', context: 'Medium', icon: 'medium', link: 'https://medium.com/@_lb_'},
      {text: '/lb-', context: 'Goodreads', icon: 'book', link: 'https://www.goodreads.com/user/show/52107290-lb-ben-johnston'},
      {text: '/lb', context: 'Github', icon: 'github', link: 'https://github.com/lb'},
      {text: '/lbeeee', context: 'Beanhunter', icon: 'coffee', link: 'https://www.beanhunter.com/users/lbeeee'},
      {text: '/lbbenjohnston', context: 'Linkedin', icon: 'linkedin', link: 'https://www.linkedin.com/in/lbbenjohnston'},
    ]
    const socialItems = socialData.map((data, index) =>
      <ContactItem
        text={data.text}
        context={data.context}
        icon={data.icon}
        link={data.link}
        key={index}
        />
    );

    return (
      <section id="contact">
        <h2>Contact</h2>
        <p>If you have a project in mind, looking for some advice on cloud services or keen to get in touch.</p>
        <h3>General</h3>
        {contactItems}
        <h3>Socials</h3>
        <p className="control">{socialItems}</p>
      </section>
    )
  }
}

export default Contact
