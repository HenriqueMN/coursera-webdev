(function () {
'use strict';

    angular.module('myFirstApp', [])
    .controller('MyFirstController', function ($scope){
        $scope.name = "Gabo";
        $scope.sayHello = function(){
            return "Hello"
        };
    });

})();