import angular from 'angular';
import subscribe from './subscribe/subscribe';
import articles from './articles/article';
import home from './home/home';
import about from './about/about';
import root from './root/root';

export default angular.module('app.components', [
  home.name,
  subscribe.name,
  articles.name,
  about.name,
  root.name
]);