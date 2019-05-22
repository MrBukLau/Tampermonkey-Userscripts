// ==UserScript==
// @name               Reddit - Old Design Redirection
// @version            1.0
// @description        Always redirects to old-Reddit to avoid Reddit's redesign
// @icon               https://www.reddit.com/favicon.ico
// @include            *://www.reddit.com/*
// @homepage           https://greasyfork.org/en/scripts/44669-bring-back-old-reddit
// @author             RandomUsername404
// @modifier           Buk Lau
// @grant              none
// @run-at             document-start
// ==/UserScript==

window.location.replace("https://old.reddit.com" + window.location.pathname);
