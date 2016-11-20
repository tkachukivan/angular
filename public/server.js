var static = require('node-static');
var fileServer = new static.Server('.');
var http = require('http');

var serv = http.createServer(formInfo);

serv.listen(3000);

var users = [];

function formInfo(request, response) {
  if(request.method == 'POST') {
    response.writeHead(200, {"Content-Type": "application/json"});

    var data = '';
    var serverAnswer = {answer: 'ok'};
    request.on('data', function(chunk) {
      data += chunk.toString();
      data = JSON.parse(data);
      console.log(data);

      if ((data.name == undefined || data.name.length < 3)) {
        serverAnswer = {error: 'name'};
        return
      }

      if (data.email == undefined || data.email.length < 3) {
        serverAnswer = {error: 'emailEmpty'};
        return
      }

      if (users.indexOf(data.email) >= 0) {
        serverAnswer = {error: 'email'};
        return
      }

      if (data.checkbox) {
        if ((data.comment == undefined || data.comment.length < 1)) {
          serverAnswer = {error: 'comment'};
          return
        }
      }

      users.push(data.email);
      console.log(users);

    });

    request.on('end', function() {
      serverAnswer = JSON.stringify(serverAnswer);
      console.log(serverAnswer);
      response.write(serverAnswer);
      response.end();
    });
  } else if (request.method == 'GET') {
    fileServer.serve(request, response);
  }
}