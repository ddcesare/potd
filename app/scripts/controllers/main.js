'use strict';



angular.module('potdApp')
  .controller('MainCtrl', function ($scope, Beer) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.beer = Beer.get({id: 'random'});
    $scope.reset = function() {
      $scope.beer = Beer.reset({id: 'random'});
      console.log($scope.beer);
    };

  });
