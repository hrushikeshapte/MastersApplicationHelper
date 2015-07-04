var app = angular.module('MSApp', []);

app.controller("mainController", function ($scope, $http) {

    console.log("here");

    $scope.test = "sucker";
    /*$scope.formInfo = {};

     $http.get('/api/information')
     .success(function(data){
     console.log(data);
     $scope.information = data;
     })

     .error(function(data){
     alert ("Cannot fetch request");
     })

     $scope.createInformation = function(){
     console.log("here");
     /*     $http.post('/api/information',$scope.formInfo)
     .success(function(data){
     $scope.formInfo = {};
     $scope.information = data;
     console.log(data);
     })

     .error(function(data){
     alert("error creating request");
     }) */
    ///};

});