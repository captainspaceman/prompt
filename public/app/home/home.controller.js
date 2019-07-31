// angular
// .module('app.home')
// .controller('HomeController', function($scope, $firebaseArray){
//   $scope.title = "Welcome to the home page";
//   var ref = firebase.database().ref().child("clients");
//   // ref.push({name:"Billy bob the client"});
//   // $scope.clients = $firebaseArray(ref);
// });

angular 
.module('app.home')
.controller('HomeController', function($scope, $http){
  $scope.submitButton = function()
  {
  	//random chuck norris nonsense
    // var request_url = "https://api.chucknorris.io/jokes/random"
    // console.log('button was clicked');

    var request_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ37q0eWXwf_SkkyKuOA-eB3W3qNe71N5LRGs-GXc6tNfvZAo-_ljJUJo1IBzIrCAPFwV-a2o3vgGO3/pub?output=csv'

    $http.get(request_url).then(function(response){
      console.log(response);
      $scope.joke = response.data.value
    })
  }
})
