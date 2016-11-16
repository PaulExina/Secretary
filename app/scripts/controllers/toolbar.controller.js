var app = angular.module("secretaryApp");
app.controller('CollapseCtrl', function ($scope) {
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});

app.controller("FunctionalitiesCtrl", function($scope){
    $scope.slides = [
        {
            id: 0,
            name: "Storage",
            span: "glyphicon-hdd",
            description: "Lorsque vous insérez des fichiers et images dans les éditeurs de contenus dans le manager du site, les fichiers / images sont nécessairement stockés en ligne, pour être accessibles dans les pages de votre site. "
        }
        ,                    
        {
            id: 1,
            name: "Calendar",
            span: "glyphicon-calendar",
            description: "Un agenda est un outil permettant d'associer des actions à des moments, et d'organiser ainsi son temps. Il est utilisé afin de pouvoir donner à son utilisateur la possibilité de planifier, de noter son emploi du temps, ses rendez-vous, etc..."
        }
        ,
        {
            id: 2,
            name: "To-do list",
            span: "glyphicon-list-alt",
            description: "Une todo list ou une liste des choses à faire est un procédé simple et efficace qui permet de se concentrer sur une tâche d\'un projet sans pour autant perdre de vue les autres tâches à accomplir."
        }
    ];

                             
    $scope.myInterval = 3000;
    $scope.active = 0;
    $scope.noWrapSlides = false;
});
