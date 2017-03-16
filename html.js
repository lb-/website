import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

const BUILD_TIME = new Date().getTime();

const heapAnalytics = `
window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
  heap.load("492429138");
`

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
          <meta name="msapplication-config" content="/images/browserconfig.xml" />
          <meta name="theme-color" content="#f36f54" />
          <title>{title}</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.2/css/bulma.min.css" />
          {css}
          <script dangerouslySetInnerHTML={{__html: heapAnalytics}} />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {js}
        </body>
      </html>
    )
  },
})
