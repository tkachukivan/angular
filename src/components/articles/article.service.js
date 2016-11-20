class ArticleService {
  constructor($http) {
    this.$http = $http
  }

  getArticles () {
    return this.$http.get('article.json');
  };
};

export default ArticleService;