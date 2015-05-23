"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Marked = require('marked');

var DescriptionLeft = React.createClass({

  render: function() {
    var nextButton = this.props.nextUrl ? <Link to="step" params={{name: this.props.nextUrl}} className="button">Next step</Link> : ""
    return(
      <div className="medium-7 columns">
        <h3>What is it all about?</h3>
        <div dangerouslySetInnerHTML={{__html: Marked(this.props.text, {sanitize: true})}}></div>
        { nextButton }
      </div>
    );
  }
});


module.exports = DescriptionLeft;
