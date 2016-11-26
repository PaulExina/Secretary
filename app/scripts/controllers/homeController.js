app.controller('homeCtrl', 
               ['$scope',
                function($scope) {
                    $scope.scrollTo = function($scrollTarget) { 
                        var offset = angular.element(document.querySelector($scrollTarget)).prop('offsetTop');

                        $('html, body').animate({scrollTop: offset}, 'slow');
                    };
                    
                  
                }]);

