// ==UserScript==
// @name               Apple Music - Artwork Grabber
// @version            1.0
// @description        Changes the image resolution and format for an artwork from Apple Music
// @icon               https://music.apple.com/assets/favicon/favicon-180-c132a95549a91ae6983a4914da3e1c44.png
// @include            *mzstatic.com/image/thumb*
// @homepage           https://sleazyfork.org/en/forum/discussion/9158/replace-string-in-an-url
// @author             Vivre
// @modifier           MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

if (location.href.match("1000x1000bb.webp")) {
	location.href = location.href.replace("1000x1000bb.webp", "2000x2000.jpeg");
}

if (location.href.match("600x600bb.webp")) {
	location.href = location.href.replace("600x600bb.webp", "2000x2000.jpeg");
}