import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import aboutService from './about.service';

let aboutModule = angular.module('about', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root.about', {
        url: '/about',
        template: '<about></about>'
      });
  })

  .component('about', aboutComponent)
  .service('aboutService', aboutService);

export default aboutModule;