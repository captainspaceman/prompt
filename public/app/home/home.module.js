angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name: 'home',
    url: '/',
    controller: 'HomeController',
    templateUrl: 'app/home/home.html'
  })
   .state({
    name: 'dark',
    url: '/dark',
    controller: 'HomeController',
    templateUrl: 'app/home/dark.html'
  })
})
