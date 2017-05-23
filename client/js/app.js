'use strict';

var app = angular.module('secretaryApp', ['ngRoute', 'ngAnimate', 'ngCookies', 'ngRoute', 'ngAria', 'ngSanitize', 'ngMessages', 'duScroll', 'ngMaterial', 'ui.router', 'pickadate','angucomplete-alt']);

app.config(['$routeProvider',
            function($routeProvider) { 
              
                // Système de routage
                $routeProvider
                /*
                    .when('/',{
                    templateUrl:'views/home.html',
                    controller: 'homeCtrl'
                })*/
                    .when('/', {
                    templateUrl: 'views/dashboard.html',
                    controller: 'dashboardCtrl'
                })
                    .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'loginCtrl'
                })
                    .when('/password-reset', {
                    templateUrl: 'views/password-reset.html',
                    controller: 'passwordresetCtrl'
                })
                    .when('/id-record', {
                    templateUrl: 'views/id-record.html',
                    controller: 'idrecordCtrl'
                })
                    .otherwise({
                    redirectTo: '/'
                })
                ;
            }
           ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
    $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
    .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
    .state('password-reset', {
        url: '/password-reset',
        templateUrl: 'views/password-reset.html',
        controller: 'passwordresetCtrl'
      });
      $urlRouterProvider.otherwise('home');
    }
]);


app.config(function($locationProvider) {
    $locationProvider
        .html5Mode({
        enabled: true, // set HTML5 mode
        requireBase: false // I removed this to keep it simple, but you can set your own base url
    });
});

app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: ['geocode']
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
});

//Dropdown 
app.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
    .directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            angular.element(document).ready(function() {

                var target = document.querySelector(attrs.slideToggle);
                var content = target.querySelector('.slideable_content');
                attrs.expanded = false;
                element.bind('click', function() {

                    if(!attrs.expanded) {
                        content.style.border = '1px solid rgba(0,0,0,0)';
                        var y = content.clientHeight;
                        content.style.border = 0;

                        target.style.height = y + 'px';
                    } else {
                        target.style.height = '0px';
                    }
                    attrs.expanded = !attrs.expanded;

                });


            });
        }
    }
});


