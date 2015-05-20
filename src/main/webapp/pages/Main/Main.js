Application.$controller("MainPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action with the variables inside this block(on-page-load) */
    $scope.onPageVariablesReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. $scope.Variables.staticVariable1.getData()
         */
        //   $scope.Variables.Echonest_list_genresInvoke.update();
    };
    /* perform any action with widgets inside this block */
    $scope.onPageReady = function() {
        /*
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. $scope.Widgets.byId(), $scope.Widgets.byName()or access widgets by $scope.Widgets.widgetName
         */
    };


    $scope.picture3Click = function($event, $isolateScope) {

    };


    $scope.picture4_1Click = function($event, $isolateScope) {
        //$scope.Variables.["goToPage-Profile"].navigate()
        //window.location.href = "#/Profile/" + $scope.Widgets.livelist2.selecteditem.id + "/" + $scope.Widgets.livelist2.selecteditem.name
    };


}]);