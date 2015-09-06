var lodashService = angular.module('ngtrumbitta.services.lodash', []);

lodashService.factory('_', ['$window',
    function($window) {
      'use strict';
      return $window._;
    }
  ]
);
