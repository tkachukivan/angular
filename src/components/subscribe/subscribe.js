import angular from 'angular';
import uiRouter from 'angular-ui-router';
import subscribeComponent from './subscribe.component';
import subscribeService from './subscribe.service';

let subscribeModule = angular.module('subscribe', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root.subscribe', {
        url: '/subscribe',
        template: '<subscribe></subscribe>'
      });
  })

  .component('subscribe', subscribeComponent)
  .service('subscribeService', subscribeService);

export default subscribeModule;