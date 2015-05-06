'use strict';

angular.module('srcApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/kogatk_route', {
        templateUrl: 'app/kogatk_route/kogatk_route.html',
        controller: 'KogatkRouteCtrl',
        authenticate: true
      });
  });
