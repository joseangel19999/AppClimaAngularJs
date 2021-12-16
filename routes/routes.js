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
        .when('/forecast/:dias', {
            templateUrl: "paginas/forecast.html",
            controller: "forecastController"
        })
});