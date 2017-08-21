(function() {
  'use strict';
  var app = angular.module("ngDemoApp");
  app.controller("editCardController", function($scope, $mdSidenav, $state, $mdDialog, $timeout, demoFactoryService) {
      var vm = this;

      vm.closeSidebar = closeSidebar;
      vm.saveEditCard     = saveEditCard;
      vm.card = $state.params.cardData;

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

      function saveEditCard() {
            $scope.$emit('editCard');
            vm.SidenavOpen = false;
      }
  });
})();
