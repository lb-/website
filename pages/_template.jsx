import React from 'react'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'

// Import styles.
import 'css/main.sass'

// import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div id="parent" className="columns container is-fluid">
        <div className="column is-one-quarter">Menu</div>
        <div className="column">
          {this.props.children}
        </div>
      </div>
    )
  },
})
