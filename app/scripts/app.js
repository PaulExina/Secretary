'use strict';

/**
 * @ngdoc overview
 * @name secretaryApp
 * @description
 * # secretaryApp
 *
 * Main module of the application.
 */
angular
  .module('secretaryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var app = angular.module("secretaryApp", []);

app.controller("homepageController", function($scope){ 
  $scope.Name = "Paul";
});

app.directive("loginNavbar", function(){
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        templateUrl: '../views/homepage/loginNavbar.html'
    }
});