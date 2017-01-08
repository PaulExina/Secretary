app.controller('templateCtrl', function($scope) {
 $scope.displayUsercard=false;

 $scope.showFolderBody = [];
 
 $scope.user = {
  name : "Paul Exina",
  email : "paulexina26@gmail.com",
  pic : "./images/profile.png"
 };
 
 $scope.file1 = {
  isFolder : false,
  id : "file1",
  name : "File1",
  location : "/Folder1"
 };
 
 $scope.folder1 = {
  isFolder : true,
  id : "folder1",
  name : "Folder1",
  location : "/",
  desc : "Content of the folder 1",
  subitems : ["file1","folder2"]
 };

 $scope.folder2 = {
  isFolder : true,
  id : "folder2",
  name : "Folder2",
  desc : "Content of the folder 2",
  location : "/Folder1",
  subitems : ["file2","folder3"]
 };

 $scope.file2 = {
  isFolder : false,
  id : "file2",
  name : "File2",
  location : "/Folder2"
 };

 $scope.folder3 = {
  isFolder : true,
  id : "folder3",
  name : "Folder3",
  location : "/",
  desc : "Content of the folder 3",
  subitems : ["file3"]
 };

 $scope.file3 = {
  isFolder : false,
  id : "file3",
  name : "File3",
  location : "/Folder3"
 };

 $scope.file4 = {
  isFolder : false,
  id : "file4",
  name : "File4",
  location : "/"
 };

 $scope.items= [];
 $scope.items["folder1"]=$scope.folder1;
 $scope.items["folder2"]=$scope.folder2;
 $scope.items["folder3"]=$scope.folder3;
 $scope.items["file1"]=$scope.file1;
 $scope.items["file2"]=$scope.file2;
 $scope.items["file3"]=$scope.file3;
 $scope.items["file4"]=$scope.file4;

 $scope.collection = ["folder1"];

 //document.querySelector(".arborescence-panel").appendChild($scope.createTree());
});







