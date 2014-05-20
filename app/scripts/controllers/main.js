'use strict';



angular.module('potdApp')
  .controller('MainCtrl', function ($scope, Beer) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.beer = Beer.get({id: 'random'});

  });
