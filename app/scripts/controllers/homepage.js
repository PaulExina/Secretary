var app = angular.module("secretaryApp", []);

app.controller("homepageController", function($scope){  
});

app.directive("loginNavbar", function(){
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    templateUrl: '../../views/homepage/loginNavbar.html'
  }
});