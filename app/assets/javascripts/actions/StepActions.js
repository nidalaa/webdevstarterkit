var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var StepActions = {

  transition: function(params) {
    AppDispatcher.dispatch({
      actionType: Constants.TRANSITION,
      stepUrlId: params.name
    });
  }

};

module.exports = StepActions;
