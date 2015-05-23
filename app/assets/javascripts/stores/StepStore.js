var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _steps = {};
var _currentUrlId = null;


var StepStore = assign({}, EventEmitter.prototype, {

  init: function() {
    this.fetchSteps();
  },

  fetchSteps: function() {
    _steps = [];

    $.ajax({
      url: "/steps",
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        _steps = data
      }.bind(this),
      error: function(xhr, status, err) {
        alert("Error during fetching steps. Try to refresh page, please.")
      }.bind(this)
    })

  },

  getAll: function() {
    return _steps;
  },

  getCurrentId: function() {
    return this.getCurrent() ? this.getCurrent().id : null;
  },

  getCurrent: function() {
    var current = null;

    for (var id in _steps) {
      if (_steps[id].urlId === _currentUrlId) {
        current = _steps[id];
        break;
      }
    }
    return current;
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



StepStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case Constants.INIT:
      StepStore.init();
      StepStore.emitChange();
      break;

    case Constants.TRANSITION:
      _currentUrlId = action.stepUrlId
      StepStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = StepStore;
