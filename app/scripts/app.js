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
                    .when('/home', {
                    templateUrl: 'views/home.html',
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
                    .when('/template1', {
                    templateUrl: 'views/template1.html', 
                    controller: 'templateCtrl' 
                }) 
                    .otherwise({
                    redirectTo: '/'
                })
                ;
            }
           ]);

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

//Tree
app.directive("secretaryTree", function(){
    return {
        restrict : 'E',
        replace: true,
        require:'?^secretaryNode',
        scope: true,
        template: '<ul>'+
        '<secretary-node ng-repeat="item in table" item-id="{{item}}" index="{{index}}"></secretary-node>'+
        '</ul>',
        link: function(scope, element, attrs){

            scope.table = scope.$eval(attrs.sourceTable);
            scope.index = scope.$eval(attrs.index)+1;

            scope.folderEnter = function(target){
                var currentFolder = target.parentElement;

                //Focus on current element
                currentFolder.style.backgroundColor = "#082745";

                //Unfocus the others
                var folders = document.querySelectorAll(".folder-header");
                var i;
                for(i=0;i<folders.length;i++){
                    if( folders[i] != currentFolder ){
                        folders[i].style = "";
                    }
                }

                //Unfocus the others
                var files = document.querySelectorAll(".file-header");

                for(i=0;i<files.length;i++){
                    files[i].style = "";
                } 

            };

            scope.fileEnter = function(){

                var currentFile = event.target.parentElement;
                //Focus on current element
                currentFile.style.backgroundColor = "#ffe699";
                currentFile.style.color= "#00284d";

                console.log(currentFile);
                //Unfocus the others
                var files = document.querySelectorAll(".file-header");
                var i;
                for(i=0;i<files.length;i++){
                    if( files[i] != currentFile ){
                        files[i].style = "";
                    }
                } 
            };

            scope.retrieveItem = function(id){
                return scope.items[id];
            };
        }

    };
})
    .directive("secretaryNode", function($compile){
    return {
        restrict : 'E',
        replace : true,
        require : ['?^secretaryFolder', '?^secretaryFile'],
        link : function(scope, element, attrs){
            var node = scope.retrieveItem(attrs.itemId);
            var index = scope.$eval(attrs.index);

            if( node.isFolder ){
                element.append('<secretary-folder item-id='+node.id+' index="{{'+index+'}}"></secretary-folder>');
            }
            else{
                element.append('<secretary-file item-id='+node.id+' index="{{'+index+'}}"></secretary-file>');
            }

            $compile(element.contents())(scope);
        }
    };
})
    .directive("secretaryFolder", function($compile){
    return {
        restrict : 'E',
        replace : true,
        require : '?^secretaryTree',
        template:
        '<li>'+
        '<a id="{{folder.id}}" class="folder-header waves-effect waves-blue">' +   
        '<p>{{folder.name}}</p>' +
        '</a>' +
        '</li>',
        link: function(scope, element, attrs){

            scope.folder = scope.retrieveItem(attrs.itemId); 

            var isEmpty = scope.folder.subitems.length == 0;
            var index = scope.$eval(attrs.index);
            var p = element[0].firstChild.children[0];
            p.style.margin= 0;
            p.style.fontWeight= 'bold';
            p.style.color= '#ffe699';
            p.style.paddingLeft = index*10 +"px";
            p.style.height = "44px";
            p.onfocus = function(){
                p.style.border= 0; 
                p.style.outline= 'none';
            };

            element[0].style.fontSize = "15px";
            element[0].style.lineHeight  = "44px";
            element[0].style.height = "44px";
            element[0].style.width= "100%";

            if(!isEmpty){
                element.append('<div class="folder-body"><secretary-tree source-table="folder.subitems" index="{{'+index+'}}" ></secretary-tree></div>');
                element[0].lastChild.style.display="none";
            }


            var DELAY = 300,
                clicks = 0,
                timer = null;

            element[0].firstChild.onclick= function(e){

                clicks++; 

                if(clicks === 1) {

                    timer = setTimeout(function() {

                        scope.folderEnter(e.target);
                        if(element[0].lastChild.style.display=="none"){
                            element[0].lastChild.style.display="block";
                        }
                        else{
                            element[0].lastChild.style.display="none";
                        } 
                        clicks = 0;             

                    }, DELAY);

                } else {

                    clearTimeout(timer);    
                    var path = scope.folder.location.split("/");
                    var i=0;
                    var breadcrumbsContent, breadcrumb;
                    
                    breadcrumbsContent = document.querySelector(".breadcrumbs-content");
                    breadcrumbsContent.innerHTML="";                    
                    for(i=0; i<path.length; i++){
                        if(path[i]!=""){
                            breadcrumbsContent = document.querySelector(".breadcrumbs-content");
                            
                            var li = document.createElement("li");
                            breadcrumb = document.createElement("a");
                            breadcrumb.className="secretary-nav-element nav-element";
                            breadcrumb.innerHTML=path[i];
                            li.appendChild(breadcrumb);
                            breadcrumbsContent.appendChild(li);
                            li = document.createElement("li");
                            li.innerHTML= '<i class="fa fa-caret-right" aria-hidden="true" style="color: #00284d;margin:3px;"></i>';
                            breadcrumbsContent.appendChild(li);
                        }
                       
                    }
                    var li = document.createElement("li");
                    breadcrumbsContent = document.querySelector(".breadcrumbs-content");
                    breadcrumb = document.createElement("a");
                    breadcrumb.innerHTML=scope.folder.name;
                    breadcrumb.className="secretary-nav-element nav-element";
                    li.appendChild(breadcrumb);
                    breadcrumbsContent.appendChild(li);
                    clicks = 0;             
                }

            };

            element[0].firstChild.ondblclick= function(e){
                e.preventDefault(); 
            };

            $compile(element.contents())(scope);
        }
    };
})
    .directive("secretaryFile", function($compile){
    return {
        restrict :'E',
        replace : true,
        scope : true,
        template : 
        '<li>'+
        '<a id="{{file.id}}" class="file-header waves-effect waves-beige">'+
        '<p>{{file.name}}</p>'+
        '</a>'+
        '</li>',
        link: function(scope, element, attrs){
            scope.file = scope.retrieveItem(attrs.itemId);
            var index = attrs.index;
            var p = element[0].firstChild.children[0];
            p.style.margin= 0;
            p.style.fontWeight= 400;
            p.style.color= 'white';
            p.style.paddingLeft = index*10 +"px";
            p.style.height = "44px";
            element.bind('click', function(){
                scope.fileEnter();
            });

        }
    };
});