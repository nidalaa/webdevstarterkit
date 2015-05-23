var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var LinkActions = {

  create: function(stepId, linkData) {
    AppDispatcher.dispatch({
      actionType: Constants.CREATE,
      stepId: stepId,
      linkData: linkData
    });
  }

};

module.exports = LinkActions;
