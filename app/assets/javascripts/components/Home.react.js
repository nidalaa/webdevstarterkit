"use strict";

var React = require('react');
var Title = require('./basic/Title.react');
var StepSection = require('./step/StepSection.react');


var Home = React.createClass({

  render: function() {
    return(
      <div>
        <Title title="WebDev Starter Kit" subtitle="Where to begin a journey to webdevelopment enlightement?" />

        <section id="main-content">
          <div className="row">
            <div className="medium-8 medium-centered columns centered-text">
              
               <h4 className="subheader margin-top-40px ">
                There are so many placese where you can look for knowledge about webdevelopment.<br></br>
                It is awesome that so many resources exist, however...<br></br>
                At the very beginning it might <strong>too</strong> much.
                The main aim of this site is to collect useful resorces and guide you to them.<br></br>

              </h4>
              
            </div>
          </div>
        </section>

        <section id="main-content">
          <div className="row">
            <hr></hr>
              <div className="medium-8 medium-centered columns centered-text">
                 <h2>Five steps to enlightenment</h2>
                 <h4 className="subheader">The most important concepts of webdevelopment starting with the most basic one.</h4>
              </div>
          </div>

          <br></br>
          <br></br>

          <StepSection/>
        </section>
      </div>
    );
  }
});


module.exports = Home;
