import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
// import { Container } from 'react-responsive-grid'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'

// Import styles.
import '../css/main.less';
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
          <Col sm="2/4" lg="1/3">
            <Nav />
          </Col>
          <Col sm="2/4" lg="2/3">
            {this.props.children}
          </Col>
        </Row>
        <Footer />
      </main>
    )
  },
})
