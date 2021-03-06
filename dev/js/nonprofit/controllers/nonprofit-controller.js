'use strict';

module.exports = function(app) {
  app.controller('nonprofit-controller', ['$scope', 'resource', function($scope, resource) {

    var Nonprofit = resource('create_nonprofit');
    var searchNonprofit = resource('nonprofit'); //this corresponds to URL from routes

    $scope.postItem = function(nonprofit) {
      console.log("nonprofit", nonprofit);
      Nonprofit.postItem(nonprofit, function(response) {
        console.log("i'm in nonprofit submitForm");
      });
    };

    $scope.searchNonprofit = function(searchReq){
      console.log("in nonprofit search");
      console.log("searchReq", searchReq);
      searchNonprofit.searchNonprofit(searchReq, function(response){
        console.log("nonprofit search to services");
        console.log("response", response);
        $scope.current = -1;
        $scope.results = response;
      });
    };
  }])};
