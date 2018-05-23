  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyASBKD0OhoeLj5PxVSPCcNhJ2m2eL2HKjo",
    authDomain: "random-prompt.firebaseapp.com",
    databaseURL: "https://random-prompt.firebaseio.com",
    projectId: "random-prompt",
    storageBucket: "random-prompt.appspot.com",
    messagingSenderId: "431056986465"
  };
  firebase.initializeApp(config);

angular
.module('app', ['ui.router','app.home','firebase'])
.config(function($urlRouterProvider){
	console.log('app.js is loading')
  $urlRouterProvider.otherwise('/');
});



