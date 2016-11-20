import angular from 'angular';
import uiRouter from 'angular-ui-router';
import articleComponent from './article.component';
import articleService from './article.service';

let articleModule = angular.module('article', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root.article', {
        url: '/article',
        template: '<article></article>'
      });
  })

  .component('article', articleComponent)
  .service('articleService', articleService);

export default articleModule;