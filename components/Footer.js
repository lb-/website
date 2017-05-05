import React, { Component } from 'react';
import './footer.less';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              Made by LB with <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>,&nbsp;
              <a href="http://bulma.io/">Bulma</a> and
              hosted with <a href="https://www.netlify.com/">Netlify</a>.
              <br />
              Using the <a href="https://fonts.google.com/specimen/Oxygen">Oxygen</a> and&nbsp;
              <a href="https://fonts.google.com/specimen/Josefin+Slab">Josefin Slab</a> fonts.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
