"use strict";

var React = require('react');

var Footer = React.createClass({

  render: function() {
    return(
      <div className="footer">
        <div className="row">
           <div className="columns">
             <p className="footer_description">This page was created as a part of master thesis entitiled: "Design concepts in web applications- the direction of development" and includes some of its fragments.</p>
          </div>          
        </div>
      </div>
    );
  }
});


module.exports = Footer;
