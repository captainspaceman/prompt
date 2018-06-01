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
    var request_url = "https://api.chucknorris.io/jokes/random"
    console.log('button was clicked');

    $http.get(request_url).then(function(response){
      console.log(response);
      $scope.joke = response.data.value
    })
  }
})
