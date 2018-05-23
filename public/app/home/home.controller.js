angular
.module('app.home')
.controller('HomeController', function($scope, $firebaseArray){
  $scope.title = "Welcome to the home page";
  // var ref = firebase.database().ref().child("clients");
  // $scope.clients = $firebaseArray(ref);
});
