'use strict';



angular.module('potdApp')
  .controller('MainCtrl', function ($scope, Beer) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.hits = 0;
    $scope.beer = Beer.get({id: 'random'});
    $scope.new = function() {
      $scope.beer = Beer.new({id: 'random', hits: $scope.hits++});
      console.log($scope.beer);
      console.log($scope.hits);
    };

    console.log($scope.beer);


  });
