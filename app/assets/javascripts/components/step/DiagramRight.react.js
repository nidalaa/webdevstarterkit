"use strict";

var React = require('react');

var DiagramRight = React.createClass({

  render: function() {
    return(
      <div className="medium-5 columns diagram">
      <img src={this.props.url}/>
      </div>
    );
  }
});


module.exports = DiagramRight;
