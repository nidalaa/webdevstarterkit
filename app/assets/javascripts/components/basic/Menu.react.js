"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Menu = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    return(
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><a href="#">WebDev Starter Kit</a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>

        <section className="top-bar-section">
          <ul className="right">
            <li><Link to="home" activeClassName="active">Home</Link></li>
            <li><Link to="step" params={{name: "client-server"}} activeClassName="active">Client-Server</Link></li>
            <li><Link to="step" params={{name: "html-css-js"}} activeClassName="active">HTML & CSS & JS</Link></li>
            <li><Link to="step" params={{name: "mvc"}} activeClassName="active">MVC</Link></li>
            <li><Link to="step" params={{name: "spa"}} activeClassName="active">SPA</Link></li>
            <li><Link to="step" params={{name: "more"}} activeClassName="active">More!</Link></li>
            
          </ul>
        </section>
      </nav>
    );
  }
});

module.exports = Menu;
