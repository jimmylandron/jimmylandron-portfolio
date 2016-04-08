myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [
        {image: "img/angular.png"},
        {image: "img/fullstack.png"},
        {image: "img/node.png"}
    ];
    
}]);