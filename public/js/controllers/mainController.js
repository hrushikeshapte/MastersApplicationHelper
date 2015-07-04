var app = angular.module('MSApp', []);

app.controller("mainController", function ($scope, $http) {

    $scope.info = {};
    var i = 1;

    $scope.init = function(){
        $scope.one = true;
    }


    $scope.emailInformation = function(){
        $scope.info[i++] = $scope.email;
        $scope.one = false;
        $scope.two = true;
    };

    $scope.quantInformation = function(){
        $scope.two = false;
        $scope.three = true;
        $scope.info[i++] = $scope.quant;
    }

    $scope.verbalInformation = function(){
        $scope.three = false;
        $scope.four = true;
        $scope.info[i++] = $scope.verbal;
    }

    $scope.totalInformation = function(){
        $scope.four = false;
        $scope.five = true;
        $scope.info[i++] = $scope.total;
    }

    $scope.toeflInformation = function(){
        $scope.five = false;
        $scope.six = true;
        $scope.info[i++] = $scope.toefl;
    }

    $scope.marksInformation = function(){
        $scope.six = false;
        $scope.seven  = true;
        $scope.info[i++] = $scope.marks;
    }

    $scope.workYearsInformation = function(){
        $scope.seven = false;
        $scope.eight = true;
        $scope.info[i++] = $scope.years;
    }

    $scope.relevanceInformation = function(){
        $scope.eight = false;
        $scope.nine = true;
        $scope.info[i++] = $scope.relevance;
    }

    $scope.companyInformation = function(){
        $scope.nine = false;
        $scope.ten = true;
        $scope.info[i++] = $scope.company;
    }

    $scope.paperInformation = function(){
        $scope.ten = false;
        $scope.eleven = true;
        $scope.eleven = true;
        $scope.info[i++] = $scope.paper;
    }

    $scope.voluntaryInformation = function(){
        console.log($scope.info);
        $scope.eleven = false;
        $scope.twelve = true;
        $scope.info[i++] = $scope.voluntary;
    }




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