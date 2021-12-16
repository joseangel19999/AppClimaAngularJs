var appClima = angular.module('AppClima');

appClima.controller('forecastController', ['$scope', 'climaService', '$http', function($scope, climaService, $http) {
    $scope.nombre = "forecast";
    $scope.ciudad = climaService.ciudad;
    console.log("ciudad -> ", $scope.ciudad);

    var headers = {
        // 'Authorization': 'Basic ' + btoa(username + ":" + password),
        'Access-Control-Allow-Origin': true
    }
    $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast',
        params: { q: $scope.ciudad, APPID: '920c386b73f1856b55410f0c8fe9493c' },
        header: { "Access-Control-Allow-Credentials": true }

    }).success(function(data, status, headers, config) {
        console.log(status);
        if (status == "200") {
            $scope.resultadoClima = data;
            console.log($scope.resultadoClima.list);
        }
    }).error(function(data, status, headers, config) {
        console.log("Ha fallado la petición. Estado HTTP:" + status);
    });

    $scope.convertirAfahrenheit = function(deGK) {
        return Math.round((1.8 * (deGK - 273)) + 32);
    }
    $scope.convertitFechas = function(fecha) {
        return new Date(fecha * 1000);
    }
}]);