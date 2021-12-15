var appClima = angular.module('AppClima', ['ngRoute', 'ngResource']);

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
    })
    /* configuracion de servicio */
appClima.service('climaService', function() {
    this.ciudad = "Huejutla de reyes Hgo";
})
appClima.controller('homeController', ['$scope', 'climaService', function($scope, climaService) {
    $scope.nombre = "jose angel";
    $scope.ciudad = climaService.ciudad;
    $scope.$watch('ciudad', function() {
        climaService.ciudad = $scope.ciudad;
    });
}]);
appClima.controller('forecastController', ['$scope', 'climaService', function($scope, climaService) {
    $scope.nombre = "forecast";
    $scope.ciudad = climaService.ciudad;
}]);