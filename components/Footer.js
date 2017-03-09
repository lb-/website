import React, { Component } from 'react';
import { Row, Col } from 'elemental';
import './footer.less';

class Footer extends Component {
  render () {
    // const { mobile, children } = this.props
    return (
      <footer>
        <Row>
          <Col sm="1/5" />
          <Col sm="3/5">
            <p>
              Made by LB with <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>,&nbsp;
              <a href="http://elemental-ui.com/">Elemental UI</a> and
              hosted with <a href="https://www.netlify.com/">Netlify</a>.
              <br />
              Using the <a href="https://fonts.google.com/specimen/Oxygen">Oxygen</a> and&nbsp;
              <a href="https://fonts.google.com/specimen/Josefin+Slab">Josefin Slab</a> fonts.
            </p>
          </Col>
          <Col sm="1/5" />
        </Row>
      </footer>
    )
  }
}

export default Footer
