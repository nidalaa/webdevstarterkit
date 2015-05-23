"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var StepLink = React.createClass({

  render: function() {
    return(
      <Link to="step" params={{name: this.props.urlId}}>
        <div className={"medium-12 large-2 columns supporticons " + this.props.extraClass}>
           <img src={"assets/titles/" + this.props.id + ".png"}/>
           <p className="centered-text">{this.props.subtitle}</p>
        </div>
      </Link>
    );
  }
});

module.exports = StepLink;
