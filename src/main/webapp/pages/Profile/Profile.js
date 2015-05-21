Application.$controller("ProfilePageController", ["$scope", function($scope) {
    "use strict";

    $scope.onPageReady = function() {
        /*
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. $scope.Widgets.byId(), $scope.Widgets.byName()or access widgets by $scope.Widgets.widgetName
         */

    };
    $scope.onPageVariablesReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. $scope.Variables.staticVariable1.getData()
         */
        $scope.Variables.Artist_Id.dataSet.dataValue = $scope.personTempId;
        $scope.Variables.Artist_name.dataSet.dataValue = $scope.nameTemp;

        //debugger;
        //$scope.Variables.Artist_bioInvoke.setInput("id", $scope.personTempId);


        //$scope.Variables.Artist_bioInvoke.dataBinding.id = $scope.personTempId;
        //$scope.Variables.Artist_bioInvoke.update();

        //$scope.$root.$safeApply($scope);

    };
    $scope.handleRoute = function(id, name) {
        $scope.personTempId = id;
        $scope.nameTemp = name
    };


    $scope.button2Click = function($event, $isolateScope) {
        window.location.href = "https://twitter.com/" + $scope.Variables.twitter_heads.dataSet.dataValue
    };

}]);