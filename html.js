import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import loadCSS from './src/htmlScripts/loadCSS'
import heapAnalytics from './src/htmlScripts/heapAnalytics'

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const title = DocumentTitle.rewind();
    const isProduction = process.env.NODE_ENV === 'production';

    let css;
    if (isProduction) {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;
    }

    let js;
    if (!isProduction) {
      js = <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="author" content="LB (Ben) Johnston - mail@lb.ee" />
          <meta name="description" content="Website of LB (Ben) Johnston. Absolutely passionate to understand how things work, create and improve systems." />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16" />
          <link rel="manifest" href="/images/manifest.json" />
          <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#f36f54" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="google-site-verification" content="WQf-OgwU2dYQg0ZiEKg0iDC04Fc5JAhJbz8p8PyUPtY" />
          <meta name="msapplication-config" content="/images/browserconfig.xml" />
          <meta name="theme-color" content="#f36f54" />
          <title>{title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.2/css/bulma.min.css" />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {js}
          <script dangerouslySetInnerHTML={{__html: heapAnalytics}} />
          <script dangerouslySetInnerHTML={{__html: loadCSS}} />
        </body>
      </html>
    )
  },
})
