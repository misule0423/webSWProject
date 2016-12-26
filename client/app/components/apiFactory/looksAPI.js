(function() {
  'use strict';

  angular
    .module('app')
    .factory('looksAPI', looksAPI);

    looksAPI.$inject = ['$http'];

    function looksAPI($http) {
      return {
        createScrapeLook: createScrapeLook,
        getAllLooks: getAllLooks,
        getSeoulLooks: getSeoulLooks,
        getDaeguLooks: getDaeguLooks,
        getBusanLooks: getBusanLooks,
        getGwangjuLooks: getGwangjuLooks,
        getJejuLooks: getJejuLooks,
        getDaejeonLooks: getDaejeonLooks,
        getPerformanceLooks: getPerformanceLooks,
        getSportsLooks: getSportsLooks,
        getTripLooks: getTripLooks,
        getMedicalLooks: getMedicalLooks,
        getUserLooks: getUserLooks,
        findOneLook: findOneLook,
        getUpdateLook: getUpdateLook,
        updateLook: updateLook,
        popLooks: popLooks,
        deleteLook: deleteLook,
        upVoteLook: upVoteLook,
        addView: addView
      }

      function createScrapeLook(look) {
        return $http.post('/api/look/scrapeUpload', look);
      }

      function getAllLooks() {
        return $http.get('/api/look/getAllLooks', {
          cache: true
        });
      }

      function getSeoulLooks() {
        return $http.get('/api/look/getSeoulLooks', {
          cache: true
        });
      }

      function getDaeguLooks() {
        return $http.get('/api/look/getDaeguLooks', {
          cache: true
        });
      }

      function getBusanLooks() {
        return $http.get('/api/look/getBusanLooks', {
          cache: true
        });
      }

      function getGwangjuLooks() {
        return $http.get('/api/look/getGwangjuLooks', {
          cache: true
        });
      }

      function getJejuLooks() {
        return $http.get('/api/look/getJejuLooks', {
          cache: true
        });
      }

      function getDaejeonLooks() {
        return $http.get('/api/look/getDaejeonLooks', {
          cache: true
        });
      }

      function getPerformanceLooks() {
        return $http.get('/api/look/getPerformanceLooks', {
          cache: true
        });
      }
      function getSportsLooks() {
        return $http.get('/api/look/getSportsLooks', {
          cache: true
        });
      }
      function getTripLooks() {
        return $http.get('/api/look/getTripLooks', {
          cache: true
        });
      }
      function getMedicalLooks() {
        return $http.get('/api/look/getMedicalLooks', {
          cache: true
        });
      }

      function getUserLooks(id) {
        return $http.get('/api/look/getUserLooks/?email=' + id, {
          cache: true
        });
      }

      function findOneLook(look) {
        return $http.get('/api/look/' + look);
      }

      function popLooks(look) {
        return $http.get('/api/look/popLooks/' + look);
      }

      function getUpdateLook(look) {
        return $http.get('/api/look/' + look._id);
      }

      function updateLook(look) {
        return $http.put('/api/look/' + look._id, look);
      }

      function deleteLook(look) {
        return $http.delete('/api/look/' + look._id);
      }

      function upVoteLook(look) {
        return $http.put('/api/look/upvote/' + look._id);
      }

      function addView(look) {
        return $http.put('/api/look/view/' + look);
      }

    }
})();