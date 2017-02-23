import React from 'react'
// import { Container } from 'react-responsive-grid'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'

// Import styles.
// import 'css/main.sass'

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
      <Row>
        <Col xs="100%" sm="25%" lg="33.333%">
          Menu
        </Col>
        <Col xs="100%" sm="77%" lg="66.667%">
          {this.props.children}
        </Col>
      </Row>
    )
  },
})
