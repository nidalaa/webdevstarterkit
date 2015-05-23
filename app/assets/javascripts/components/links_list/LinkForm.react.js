"use strict";

var React = require('react');
var LinkActions = require('../../actions/LinkActions');

var LinkForm = React.createClass({

  getInitialState: function() {
    return {title: '', url: '', description: ''};
  },

  render: function() {
    return(
      <form className="linkForm" onSubmit={this._handleSubmit}>
        <input type="text" placeholder="Give link's title..." value={this.state.title} onChange={this._onTitleChange} />
        <input type="text" placeholder="Give link's URL..." value={this.state.url} onChange={this._onUrlChange} />
        <input type="text" placeholder="Give link's description..." value={this.state.description} onChange={this._onDescriptionChange} />
        <input type="submit" value="Add" className="button"/>
      </form>
    );
  },

  _handleSubmit: function(e){
    e.preventDefault();

    LinkActions.create(this.props.stepId, this.state);
    this.setState({title: '', url: '', description: ''});
  },

  _onTitleChange: function(event, value) {
    this.setState({title: event.target.value});
  },

  _onUrlChange: function(event, value) {
    this.setState({url: event.target.value});
  },

  _onDescriptionChange: function(event, value) {
    this.setState({description: event.target.value});
  }

});


module.exports = LinkForm;
