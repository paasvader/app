'use strict';

describe('Controller: KogatkRouteCtrl', function () {

  // load the controller's module
  beforeEach(module('srcApp'));

  var KogatkRouteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KogatkRouteCtrl = $controller('KogatkRouteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
