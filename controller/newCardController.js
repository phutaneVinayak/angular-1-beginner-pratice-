(function() {
  'use strict';
  var app = angular.module("ngDemoApp");
  app.controller("newCardController", function($scope, $mdSidenav, $state, $mdDialog, $timeout, demoFactoryService) {
      var vm = this;

      vm.closeSidebar = closeSidebar;
      vm.saveCard     = saveCard;
      $timeout( function() {
        $mdSidenav('left').open();
      });

      $scope.$watch('vm.SidenavOpen', function(sidenav) {
        if(sidenav === false ){
            $mdSidenav('left')
            .close()
            .then( function() {
              $state.go('cards');
            });
        }
      });

      function closeSidebar() {
        vm.SidenavOpen = false;
      }

      function saveCard(card) {
        if(card) {
            $scope.$emit('newCard', card);
            vm.SidenavOpen = false;
        }
      }
  });
})();
