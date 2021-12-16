appClima.controller('homeController', ['$scope', 'climaService', function($scope, climaService) {
    $scope.nombre = "jose angel";
    $scope.ciudad = climaService.ciudad;
    $scope.$watch('ciudad', function() {
        climaService.ciudad = $scope.ciudad;
    });
}]);