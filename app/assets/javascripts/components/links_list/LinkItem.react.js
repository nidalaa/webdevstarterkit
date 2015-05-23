"use strict";

var React = require('react');

var LinkItem = React.createClass({

  render: function() {
    return(
      <div className="small-12 medium-4 columns end">
        <img className="link-icon" src="assets/link-icon.png"/>
        <br></br>
        <a href={this.props.url} target="_blank">{this.props.title}</a>
        <p>{this.props.description}</p>
      </div>
    );
  }
});


module.exports = LinkItem;
