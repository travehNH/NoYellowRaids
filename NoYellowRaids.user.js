// ==UserScript==
// @name        No Yellow Farmlist sends
// @include     http://*.travian.*/build.php?*id=39*&gid=16
// @include     https://*.travian.*/build.php?*id=39*&gid=16
// @grant        none
// @namespace   NoYellowRaids
// @version     3.651
// @author      Stratusoid
// ==/UserScript==

(function() {
    'use strict';
    var yellows = document.getElementsByClassName('iReport2'),
        reds = document.getElementsByClassName('iReport3');
    for (var i = 0;i < reds.length;i++) {
        yellows.push(reds[i]);
    }
    for (var i = 0;i < yellows.length;i++) {
        yellows[i].parentElement.parentElement.children[0].innerHTML = 'Disabled';
    }
})();
