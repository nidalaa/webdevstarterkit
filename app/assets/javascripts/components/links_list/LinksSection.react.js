"use strict";

var React = require('react');
var LinkItem = require('./LinkItem.react');

var LinksSection = React.createClass({
  render: function() {
    return(
      <div className="row">
        {this.props.links.map(function(link){
          return(
            <LinkItem key={link.id} {...link}/> 
          );
        })}
      </div>
    );
  }

});


module.exports = LinksSection;
