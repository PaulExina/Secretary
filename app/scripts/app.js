'use strict';

var app = angular.module('secretaryApp', ['ngMaterial', 
                                          'ngAnimate', 
                                          'ngCookies', 
                                          'ngResource', 
                                          'ngRoute',
                                          'ngAria',
                                          'ngSanitize',
                                          'ngMessages',
                                          'duScroll'
                                         ]);

app.config(['$routeProvider',
            function($routeProvider) { 

             // Système de routage
             $routeProvider
              .when('/', {
              templateUrl: 'views/template1.html',
              controller: 'homeCtrl'
             })
              .when('/login', {
              templateUrl: 'views/login.html',
              controller: 'loginCtrl'
             })
              .when('/password-reset', {
              templateUrl: 'views/password-reset.html',
              controller: 'passwordresetCtrl'
             })
              .otherwise({
              redirectTo: '/'
             })
             ;
            }
           ]);
