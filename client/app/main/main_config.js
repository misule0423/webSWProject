(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        authenticate: true
      });

      $stateProvider
      .state('main1', {
        url: '/main1',
        templateUrl: 'app/main/main1.html',
        controller: 'MainCtrl',
        authenticate: true
      });


      $stateProvider
      .state('main2', {
        url: '/main2',
        templateUrl: 'app/main/main2.html',
        controller: 'MainCtrlSeoul',
        authenticate: true
      });

      $stateProvider
      .state('main3', {
        url: '/main3',
        templateUrl: 'app/main/main3.html',
        controller: 'MainCtrlDaegu',
        authenticate: true
      });

      $stateProvider
      .state('main7', {
        url: '/main7',
        templateUrl: 'app/main/main7.html',
        controller: 'MainCtrlDaejeon',
        authenticate: true
      });

      $stateProvider
      .state('main4', {
        url: '/main4',
        templateUrl: 'app/main/main4.html',
        controller: 'MainCtrlBusan',
        authenticate: true
      });

      $stateProvider
      .state('main5', {
        url: '/main5',
        templateUrl: 'app/main/main5.html',
        controller: 'MainCtrlGwangju',
        authenticate: true
      });

      $stateProvider
      .state('main6', {
        url: '/main6',
        templateUrl: 'app/main/main6.html',
        controller: 'MainCtrlJeju',
        authenticate: true
      });

      $stateProvider
      .state('main8', {
        url: '/main8',
        templateUrl: 'app/main/main8.html',
        controller: 'MainCtrlPerformance',
        authenticate: true
      });

      $stateProvider
      .state('main9', {
        url: '/main9',
        templateUrl: 'app/main/main9.html',
        controller: 'MainCtrlSports',
        authenticate: true
      });


      $stateProvider
      .state('main10', {
        url: '/main10',
        templateUrl: 'app/main/main10.html',
        controller: 'MainCtrlTrip',
        authenticate: true
      });


      $stateProvider
      .state('main11', {
        url: '/main11',
        templateUrl: 'app/main/main11.html',
        controller: 'MainCtrlMedical',
        authenticate: true
      });


      $stateProvider
      .state('main12', {
        url: '/main12',
        templateUrl: 'app/main/main12.html',
        controller: 'MainCtrl',
        authenticate: true
      });

  }

})();