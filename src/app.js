import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components/components';
import './main.sass';

angular.module('app', [
  uiRouter,
  components.name
]);


