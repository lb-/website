const js = `
window.bestofjs = {};
function loadCSS(e,t,n){"use strict";var i=window.document.createElement("link");var o=t||window.document.getElementsByTagName("script")[0];i.rel="stylesheet";i.href=e;i.media="only x";o.parentNode.insertBefore(i,o);setTimeout(function(){i.media=n||"all"})}
loadCSS('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
loadCSS('https://fonts.googleapis.com/css?family=Josefin+Slab');
loadCSS('https://fonts.googleapis.com/css?family=Oxygen');
`
export default js
