angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.schedule', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.lostAndFound', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lostAndFound.html',
        controller: 'lostAndFoundCtrl'
      }
    }
  })

  .state('menu.eventInformation', {
    url: '/page6',
	params: {
		eventId: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventInformation.html',
        controller: 'eventInformationCtrl'
      }
    }
  })

  .state('menu.replies', {
    url: '/page7',
	params: {
		messageId: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/replies.html',
        controller: 'repliesCtrl'
      }
    }
  })

  .state('menu.favorites', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('menu.messages', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});