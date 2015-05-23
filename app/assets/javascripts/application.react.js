"use strict";

window.React = React; // export for http://fb.me/react-devtools

var React = require('react');
var Router = require('react-router');
var Redirect = Router.Redirect;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Menu = require('./components/basic/Menu.react');
var Footer = require('./components/basic/Footer.react');
var Home = require('./components/Home.react');
var Step = require('./components/step/Step.react');

var AppActions = require('./actions/AppActions');
var StepActions = require('./actions/StepActions');

var StepStore = require('./stores/StepStore');
var LinkStore = require('./stores/LinkStore');


var App = React.createClass({
  render: function() {
    return(
      <div>
        <Menu/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="home" handler={Home}/>
    <Route name="step" path="step/:name" handler={Step}/>
    <Redirect from="/" to="home" />
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){
  AppActions.init();

   $(document).ajaxStop(function () {
    Router.run(routes, function (Handler, state) {
      React.render(<Handler/>, document.getElementById("react"));

      StepActions.transition(state.params);
    });
  });
  
});
