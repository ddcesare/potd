var BeerDB = angular.module('BeerDB', ['ngResource']);

BeerDB.factory('Beer', ['$resource',
  function($resource){
    return $resource('https://potd-46cea2a6b365.my.apitools.com/beer/:id', {id: '@id' },
      {
        new: {
          'method' : 'GET',
          'params' : {
            'new' : true,
            'hits' : '@hits'
          }

        }
      }
    );
  }]);
