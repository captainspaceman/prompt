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
	console.log('can you hear me?')
  $urlRouterProvider.otherwise('/');
})


  $("#submitButton").click(function(){
      console.log('button was clicked');
      // location.reload();
 
  });

$('#r').click(function(){
  $('#r').click(function(event){
    event.preventDefault();
  })
  console.log('change view button clicked');
  $('body').toggleClass('black');
  $('p').toggleClass('white');
  $('h1').toggleClass('white');
})



  //social share buttons

          $("#facebook-share").click(function(){
            console.log("Facebook share button clicked");
          })

          $("#twitter-share").click(function(){
            console.log("Twitter share button clicked");
          })

          $("#email-share").click(function(){
            console.log("Email share button clicked");
          })
