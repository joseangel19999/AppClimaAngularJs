var appClima = angular.module('AppClima', ['ngRoute', 'ngResource']);

appClima.controller("mainController", ['$scope', function($scope) {

}]);
/* configuracion de rutas */
appClima.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "paginas/home.html",
            controller: "homeController"
        })
        .when('/forecast', {
            templateUrl: "paginas/forecast.html",
            controller: "forecastController"
        })
});