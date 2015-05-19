window.React = React; // export for http://fb.me/react-devtools

var React = require('react');
var Main = require('./components/Main.react');

document.addEventListener("DOMContentLoaded", function(){
  React.render(<Main/>, document.getElementById("react"));

});
