angular.module("ngDemoApp", ["ngMaterial", 'ui.router'])
   .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
       $mdThemingProvider.theme('default')
       .primaryPalette('teal')
       .accentPalette('orange');
       $urlRouterProvider.otherwise('');
       $locationProvider.hashPrefix('');
       $stateProvider
         .state("cards", {
            url: '/cards',
            templateUrl: '../partial_cardList.html',
            controller: 'cardsController as vm'
         })
         .state("cards.newCard", {
            url: '/newCard',
            templateUrl: '../partial_newCard.html',
            controller: 'newCardController as vm'
         })
         .state("cards.editCard", {
            url: '/editCard/:id',
            templateUrl: '../partial_editCard.html',
            controller: 'editCardController as vm',
            params: {
              cardData: null
            }
         });
  });
