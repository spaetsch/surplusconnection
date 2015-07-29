'use strict';

console.log("in resource services");

module.exports = function(app){
  var errorhandler = function(data){
    console.log(data);
  }

  app.factory('resource', ['$http', function($http){
    return function(resourceName){
      return {
        //object that contains functions
        //define based on our controller
        getAll: function(callback){
          $http({
            method: 'GET',
            url: '/' + resourceName
          })
          .success(callback)
          .error(errorhandler);
        },
        submit: function(resource, callback){
          console.log("submit resourceName ", resourceName);
          console.log("submit resource ", resource);
          $http({
            method: 'POST',
            url: '/api/' + resourceName,  //needs /api/ to match up with server.js app.use
            data: resource
          })
          .success(callback)
          .error(errorhandler);
        }
      }
    }
  }]);
}