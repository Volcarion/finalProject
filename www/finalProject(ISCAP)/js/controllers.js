angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('scheduleCtrl', ['$scope', '$stateParams', 'ScheduleInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ScheduleInfo) {
$scope.events = ScheduleInfo.schedule;

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('lostAndFoundCtrl', ['$scope', '$stateParams', 'OtherInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, OtherInfo) {
$scope.information = OtherInfo.info;

}])
   
.controller('eventInformationCtrl', ['$scope', '$stateParams', 'ScheduleInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ScheduleInfo) {
$scope.events = ScheduleInfo.schedule;
$scope.params = $stateParams;

var eventIds = {};

for (var i=0; i < $scope.events.length; i++){
    eventIds[$scope.events[i].eventId] = $scope.events[i];
}

$scope.event = eventIds[$scope.params.eventId];
}])
   
.controller('repliesCtrl', ['$scope', '$stateParams', 'OtherInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, OtherInfo) {
$scope.information = OtherInfo.info;
$scope.params = $stateParams;

var messageIDs = {};

for (var i=0; i < $scope.information.length; i++){
    messageIDs[$scope.information[i].messageId] = $scope.information[i];
}

$scope.info = messageIDs[$scope.params.messageId];
}])
   
.controller('favoritesCtrl', ['$scope', '$stateParams', 'SaveInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, SaveInfo) {
$scope.saves = SaveInfo.save;

}])
   
.controller('messagesCtrl', ['$scope', '$stateParams', 'MessageInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MessageInfo) {
$scope.messages = MessageInfo.message;

}])
 