Angular
Angular Ui Router
ES6
Babel
Webpack
Component Method
Sass

In folder 'src' locate all source files.
In folder 'public' locate main index.html file, all bundling files(css and js, html like js templates), server.js file
and json file for page with articles.
Project has 3 separate page: article — where using $http.get(JSON file was generated from rss, what was downloaded from
                             BBC site, and when you click 'Read more' you go to this site.);
                             subscribe — page with form what validate email in server($http.post);
                             about — just page with some content.


RUN
Need to run npm install node static(or npm install for all dependencies)
Need to run server.js file and in browser open page with url: http://localhost:3000.