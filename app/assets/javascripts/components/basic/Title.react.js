"use strict";

var React = require('react');

var Title = React.createClass({

  render: function() {
    return(
      <section id="responsive-gallery-large">
        <div className="row">
          <div className="medium-7 columns">
          <h1>{this.props.title}</h1>
          <h4>{this.props.subtitle}</h4>
          </div>
        </div>
      </section>
    );
  }
});


module.exports = Title;
