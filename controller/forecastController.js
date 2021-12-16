appClima.controller('forecastController', ['$scope', 'climaService', '$http', '$routeParams', function($scope, climaService, $http, $routeParams) {
    $scope.nombre = "forecast";
    $scope.dias = $routeParams.dias || 2;
    $scope.ciudad = climaService.ciudad || 'mexico';

    var headers = {
        // 'Authorization': 'Basic ' + btoa(username + ":" + password),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': ['GET', 'PUT', 'DELETE']
    }
    if ($scope.ciudad != undefined || $scope.ciudad != null) {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast',
            params: { q: $scope.ciudad, APPID: '920c386b73f1856b55410f0c8fe9493c', cnt: $scope.dias },
            header: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }

        }).success(function(data, status, headers, config) {
            if (status == "200") {
                $scope.resultadoClima = data;
            }
        }).error(function(data, status, headers, config) {
            console.log("Ha fallado la petición. Estado HTTP:" + status);
        });
    }

    $scope.convertirAfahrenheit = function(deGK) {
        return Math.round((1.8 * (deGK - 273)) + 32);
    }
    $scope.convertitFechas = function(fecha) {
        return new Date(fecha * 1000);
    }
}]);