(function () {
'use strict';
    
    angular.module('NameCalculator', [])
    .controller('NameCalculatorController', function ($scope){
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumeric = function() {
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function calculateNumericForString(string) {
            var totalStringValue = 0;
            for (var index = 0; index < string.length; index++) {
                totalStringValue += string.charCodeAt(index)
            }

            return totalStringValue;
        }
    });
})()