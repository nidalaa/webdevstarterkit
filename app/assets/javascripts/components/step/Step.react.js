"use strict";

var React = require('react');

var StepStore = require('../../stores/StepStore');
var LinkStore = require('../../stores/LinkStore');

var Title = require('../Title.react');
var DescriptionLeft = require('./DescriptionLeft.react');
var DiagramRight = require('./DiagramRight.react');
var LinksSection = require('../links_list/LinksSection.react');


function getStateFromStores() {
  return {
    currentStep: StepStore.getCurrent(),
    stepLinks: LinkStore.getAllForCurrentStep()
  };
}

var Step = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    StepStore.addChangeListener(this._onChange);
    LinkStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    StepStore.removeChangeListener(this._onChange);
    LinkStore.removeChangeListener(this._onChange);
  },

  render: function() {
    if (this.state.currentStep) {
      var step = this.state.currentStep,
          linksGroups = [],
          size = 3;

      while (this.state.stepLinks.length > 0)
          linksGroups.push(this.state.stepLinks.splice(0, size));

      var linksList = linksGroups.map(function(group) {
        return(
            <LinksSection links={group} />
          );
      });

      return(

        <div>
          <Title title={step.title} subtitle={step.subtitle} />
          <div className="row">
            <DescriptionLeft text={step.description} nextUrl={step.nextUrl} />
            <DiagramRight url={step.diagram}  />
          </div>
          <div className="row">
            <hr></hr>
            <div className="small-12 medium-12 columns">
              <h3>Useful links</h3>
              { linksList }
            </div>
          </div>
          
        
        </div>
      );
    } else {
      return null
    }
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }
});


module.exports = Step;
