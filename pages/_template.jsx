import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import '../css/main.less';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <main>
        <div className="columns">
          <div className="column is-half-desktop is-one-third-tablet">
            <Nav />
          </div>
          <div className="column is-half-desktop is-two-thirds-tablet">
            {this.props.children}
            <Contact />
          </div>
        </div>
        <Footer />
      </main>
    )
  },
})
