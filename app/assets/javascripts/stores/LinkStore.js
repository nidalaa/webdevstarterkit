var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');
var StepStore = require('./StepStore');

var CHANGE_EVENT = 'change';

var _links = {};

var LinkStore = assign({}, EventEmitter.prototype, {

  init: function() {
    this.fetchLinks();
  },

  fetchLinks: function(){
    _links = [];

    $.ajax({
      url: "/links",
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        _links = data
      }.bind(this),
      error: function(xhr, status, err) {
        alert("Error during fetching links. Try to refresh page, please.")
      }.bind(this)
    })

  },

  getAll: function() {
    return _links;
  },

  getAllForCurrentStep: function() {
    var stepLinks = [];
    for (var id in _links) {
      if (_links[id].stepId === StepStore.getCurrentId()) {
        stepLinks.push(_links[id]);
      }
    }
    return stepLinks;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});



LinkStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case Constants.INIT:
      LinkStore.init();
      LinkStore.emitChange();
      break;

    case Constants.TRANSITION:
      AppDispatcher.waitFor([StepStore.dispatchToken]);
      LinkStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = LinkStore;
