appClima.directive('climaReporte', function() {
    return {
        restrict: 'E',
        templateUrl: './directives/climaReporte.html',
        replace: true,
        scope: {
            climaDia: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});