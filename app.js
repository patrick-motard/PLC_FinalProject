var app = angular.module('PLCApp', ['ngRoute'])
    .config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'homeController'
                })
                .when('/test', {
                    templateUrl: 'views/test.html',
                    controller: 'testController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ])
    