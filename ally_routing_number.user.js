// ==UserScript==
// @name          Ally Routing Number Viewer
// @namespace     www.aaronfoltz.com
// @description   Add the Ally Routing number
// @include       *ally*
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  alert("HI");
  $('table.margin15px > tbody > tr:first').clone().insertBefore('table.margin15px > tbody > tr:first');
  $('table.margin15px > tbody > tr:first > td:first').html("Routing Number:");
  $('table.margin15px > tbody > tr:first > td:last').html("124003116");
}

// load jQuery and execute the main function
addJQuery(main);