"use strict";

var React = require('react');
var StepStore = require('../../stores/StepStore');
var StepLink = require('./StepLink.react');

function getStateFromStores() {
  return {
    steps: StepStore.getAll()
  };
}

var StepSection = React.createClass({

  getInitialState: function() {
    return {steps: []}
  },

  componentDidMount: function() {
    this.setState(getStateFromStores());
  },

  render: function() {
    var firstNode = this.state.steps[0],
        lastNode = this.state.steps[this.state.steps.length-1];

    var nodes = this.state.steps.map(function(step){
      var extraClass = "";

      if (step === firstNode) {
        extraClass = "large-offset-1"
      } else if (step === lastNode)  {
        extraClass = "end"
      }
      return(
        <StepLink key={step.id} extraClass={extraClass} {...step}/> 
      );
    })
    return(
      <div id="step-section" className="row centered-text">
        {nodes}
      </div>
    );
  }
});


module.exports = StepSection;
