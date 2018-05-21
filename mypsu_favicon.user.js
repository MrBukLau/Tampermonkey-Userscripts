// ==UserScript==
// @name           myPSU Favicon
// @description    Adds a favicon to myPSU
// @author         Buk Lau
// @version        0.1
// @include        *my.pdx.edu*
// @grant          none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://www.pdx.edu/sites/all/themes/pdx_respond/favicon.ico';
favicon_link_html.type = 'image/ico';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }