import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rootComponent from './root.component';

let rootModule = angular.module('root', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        template: '<root></about>'
      });
  })

  .component('root', rootComponent)

export default rootModule;