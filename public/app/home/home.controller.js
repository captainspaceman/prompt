angular
.module('app.home')
.controller('HomeController', function($scope, $firebaseArray){
  $scope.title = "Welcome to the home page";
  var ref = firebase.database().ref().child("clients");
  ref.push({name:"Billy bob the client"});
  $scope.clients = $firebaseArray(ref);
});
