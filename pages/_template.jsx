import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
// import { Container } from 'react-responsive-grid'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'

// Import styles.
import '../css/main.css';

// import { rhythm } from '../utils/typography'
// import Flex from 'react-uikit-flex';
// import Panel from 'react-uikit-panel';
import '../node_modules/elemental/less/elemental.less'
import { Row, Col } from 'elemental'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <main>
        <Row>
          <Col xs="100%" sm="25%" lg="33.333%">
            <Nav />
          </Col>
          <Col xs="100%" sm="77%" lg="66.667%">
            {this.props.children}
          </Col>
        </Row>
        <Footer />
      </main>
    )
  },
})
