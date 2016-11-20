class ArticleController {
  constructor(articleService) {
    this.article;

    articleService.getArticles().then((result)=> {
      this.article = result.data.items;
    })
  }
}

export default ArticleController;