var imageApp=angular.module('starter', ['ionic','ngCordova','firebase']);

var FBURL = "https://crackling-fire-2339.firebaseio.com/";

 angular.module('starter', [
 'ionic', 
 'firebase',
 'ngCordova',
 'starter.controllers-user',
 'starter.controllers-followers',
 'starter.controllers-follower-detail',
 'starter.services-auth',
 'starter.services-profile',
 'starter.services-followers',
 'starter.services-codes',
 'starter.services-utils',
 'starter.services-cordova-camera'])

 .run(function($ionicPlatform) {
 $ionicPlatform.ready(function() {
  // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
  // for form inputs)
 if (window.cordova && window.cordova.plugins.Keyboard) {
  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  cordova.plugins.Keyboard.disableScroll(true);

}
if (window.StatusBar) {
  // org.apache.cordova.statusbar required
  StatusBar.styleDefault();
}
// hide the splash screen only after everything's ready (avoid flicker)
// requires keyboard plugin and confix.xml entry telling the splash screen to stay until explicitly told
if(navigator.splashscreen){
  navigator.splashscreen.hide();
  }
  });
  })

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

.state('app', {
url: '/app',
abstract: true,
templateUrl: 'templates/menu.html',
controller: 'UserCtrl'
})

.state('app.dash', {
  url: '/dash',
  views: {
    'menuContent': {
      templateUrl: 'templates/dash.html'
    }
  }
})
.state('app.followers', {
  url: '/followers',
  views: {
    'menuContent': {
      templateUrl: 'templates/followers/followers.html',
      controller: 'FollowersCtrl'
    }
   }
  })

.state('app.map', {
   url: '/map',
  views: {
   'menuContent': {
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
   }
  }
 })

.state('app.follower', {
  url: '/followers/:fid',
  views: {
    'menuContent': {
      templateUrl: 'templates/followers/follower-detail.html',
      controller: 'FollowerDetailCtrl'
    }
  }
});
 
$urlRouterProvider.otherwise('/app/dash');

});