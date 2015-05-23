var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var StepActions = {

  init: function(params) {
    AppDispatcher.dispatch({
      actionType: Constants.INIT
    });
  }

};

module.exports = StepActions;
