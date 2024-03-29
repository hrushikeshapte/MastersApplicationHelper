var app = angular.module('MSApp', []);

app.controller("mainController", function ($scope, $http) {

    $scope.info = {};
    $scope.question = 1 ;
    var i = 1;

    $scope.init = function(){
        $scope.one = true;
        $scope.email = "someone@someone.com";
        $scope.quant = 130;
        $scope.verbal = 130;
        $scope.total = 260;
        $scope.toefl = 100;
        $scope.years = 0;
        $scope.paper = 0;
        $scope.gpa = 1;
        $scope.quest = true;
    };

    $scope.emailInformation = function(){
        $scope.info[i++] = $scope.email;
        $scope.one = false;
        $scope.two = true;
        $scope.question = 2 ;
    };

    $scope.quantInformation = function(){
        $scope.two = false;
        $scope.three = true;
        $scope.info[i++] = $scope.quant;
        $scope.question = 3 ;
    };

    $scope.verbalInformation = function(){
        $scope.three = false;
        $scope.four = true;
        $scope.info[i++] = $scope.verbal;
        $scope.question = 4 ;
    };

    $scope.totalInformation = function(){
        $scope.four = false;
        $scope.five = true;
        $scope.info[i++] = $scope.total;
        $scope.question = 5 ;
    };

    $scope.toeflInformation = function(){
        $scope.five = false;
        $scope.six = true;
        $scope.selection = true;
        $scope.info[i++] = $scope.toefl;
        $scope.question = 6 ;
    };

    $scope.selectionInformation = function() {
        if($scope.selection == "1"){
            $scope.gpaSelect = true;
            $scope.selection = false;
            $scope.class = false;
        }

        else{
            $scope.class=true;
            $scope.selection = false;
            $scope.gpaSelect = false;
        }
    }

    $scope.gpaInformation = function(){
        $scope.six = false;
        $scope.seven  = true;
        $scope.info[i++] = $scope.gpa;
        $scope.question = 7 ;
    };

    $scope.marksInformation = function(){
        $scope.six = false;
        $scope.seven  = true;
        $scope.info[i++] = $scope.marks;
        $scope.question = 7 ;
    };

    $scope.workYearsInformation = function(){
        $scope.seven = false;
        $scope.eight = true;
        $scope.info[i++] = $scope.years;
        $scope.question = 8 ;
    };

    $scope.relevanceInformation = function(){
        $scope.eight = false;
        $scope.nine = true;
        $scope.info[i++] = $scope.relevance;
        $scope.question = 9 ;
    };

    $scope.companyInformation = function(){
        $scope.nine = false;
        $scope.ten = true;
        $scope.info[i++] = $scope.company;
        $scope.question = 10 ;
    };

    $scope.paperInformation = function(){
        $scope.ten = false;
        $scope.eleven = true;
        $scope.eleven = true;
        $scope.info[i++] = $scope.paper;
        $scope.question = 11 ;
    };

    $scope.voluntaryInformation = function(){
        $scope.eleven = false;
        $scope.twelve = true;
        $scope.quest = false
        $scope.info[i++] = $scope.voluntary;

        $http.post('/info',$scope.info)
            .success(function(data) {
                $scope.results = data ;
            })
            .error(function(data) {
                alert("Cannot get response from server");
            });

    }

});