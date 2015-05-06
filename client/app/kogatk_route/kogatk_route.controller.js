'use strict';

angular.module('srcApp')
  .controller('KogatkRouteCtrl', function ($scope) {
    $scope.message = 'Hello';
      $scope.arrDummyData = [
        {"id":"1","name":"j1","url":"http://localhost:9000:8080","status":"1","date":"2015/5/6"},
        {"id":"2","name":"j2","url":"http://localhost:9000:8081","status":"1","date":"2015/5/6"},
        {"id":"3","name":"j3","url":"http://localhost:9000:8082","status":"1","date":"2015/5/6"},
        {"id":"4","name":"j4","url":"http://localhost:9000:8083","status":"1","date":"2015/5/6"},
        {"id":"5","name":"j5","url":"http://localhost:9000:8084","status":"1","date":"2015/5/6"}
      ];
  });
