var app = angular.module('PLCApp', ['ngRoute'])
    .config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'home/home.html',
                    controller: 'homeController as vm'
                })
                .when('/test', {
                    templateUrl: 'testEnv/test.html',
                    controller: 'testController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ])
    