(function(){
 angular.module("ngDemoApp")
         .factory("demoFactoryService", function($http) {
            function getData(){
              return $http.get('data/remoteData.json');
            }
            return {
              getDataObj : getData
            }
         })
})();
