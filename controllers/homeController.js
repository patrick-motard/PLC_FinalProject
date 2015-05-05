app.controller('homeController', HomeController)
    
HomeController.$inject = ['$scope']

function HomeController($scope) {

    $scope.message = 'hello this is the home view!'
};
