(function() {
  'use strict';
  var app = angular.module("ngDemoApp") ;
  app.controller("cardsController", function($scope, $http, $state, demoFactoryService, $mdSidenav, $mdToast, $mdDialog) {

        var vm = this;

        vm.openSidebar = openSidebar;
        vm.closeSidebar = closeSidebar;
        vm.editCard = editCard;
        vm.saveEditCard = saveEditCard;
        vm.deleteCard = deleteCard;

        vm.card;
        vm.editing;
        vm.demo;

        demoFactoryService.getDataObj().then(function(fetchData){
          vm.demo = fetchData.data;
        })

        function openSidebar() {
            $state.go('cards.newCard');
        }
        function closeSidebar() {
          $mdSidenav('left').close();
        }

        var contact = {
          "name":"John Doe",
          "phone":"(555) 555-5555",
          "email":"johndoe@gmail.com"
        }

        $scope.$on('newCard', function(event, card) {
            saveCard(card);
        });

        $scope.$on('editCard', function(event, data) {
          saveEditCard();
        })

        function saveCard(card) {
          if(card){
            card.contact = contact;
            card.id = vm.demo.length + 1;
            vm.demo.push(card);
            vm.card = {};
            closeSidebar();
            Toast("cardSave");
          }
        }

        function editCard(cardDataEdit) {
            //vm.editing = true;
            //vm.card = cardDataEdit;
            //openSidebar();
            $state.go('cards.editCard', {
              id: cardDataEdit.id,
              cardData: cardDataEdit
            });
        }

        function saveEditCard() {
          //vm.editing = false;
          vm.card = {};
          closeSidebar();
          Toast("Edit card save");
        }
        function deleteCard(event, cardData) {
          var comfirm = $mdDialog.confirm()
                                 .title("Are you sure want to delete " + cardData.title + '?')
                                 .ok('Ok')
                                 .cancel('cancel')
                                 .targetEvent(event);
          $mdDialog.show(comfirm).then( function() {
            var index = vm.demo.indexOf(cardData);
            vm.demo.splice(index, 1);
          }, function() { });
        }

        function Toast(messsage) {
          $mdToast.show(
              $mdToast.simple()
              .content(messsage)
              .position('top, right')
              .hideDelay(2000)
          );
        }
  });
})();
