(function () {
'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lunchList = '';
        $scope.message = "Please enter data first"; // Default message

        $scope.checkLunchList = function(){
            /* Calls for countLunch() to check the number of items for the if statements */
            if(countLunch() <= 0){ 
                $scope.message = "Please enter data first";
            }else if(countLunch() <= 3){
                $scope.message = "Enjoy!";
            }else{
                $scope.message = "Too Much!"
            }
        }

        function countLunch(){
            var lunchListArr = $scope.lunchList.split(','); // Split the list using the comma
            var count = 0;
            for (var index = 0; index < lunchListArr.length; index++) {
                if(lunchListArr[index].trim('').length > 0){ // Disregards the blank spaces so it doesn't falsely increase the count
                    count++;
                }
            }
            return count;
        }
    }
})()