/**
 In order to run this server as a script, run the following command:
 npm run native-server
**/
const http = require('http');
const url = require('url');
const users = require('./users');
const utils = require('./utils');

// creates a wrapped response object with provided functionality to write the response
const wrappedResponse = function(response) {
  return {
    sendResult: function(statusCode = 200, json = {}) {
      response.writeHead(statusCode, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(json));
      response.end();
    }
  };
};

const server = http.createServer(function(request, response) {
  const requestUrl = url.parse(request.url, true);

  utils.logUrl(requestUrl);

  if (requestUrl.pathname == "/") {
    wrappedResponse(response).sendResult(200, { content: "hello" });
  } else if (requestUrl.pathname == "/users") {
    const { start=1, limit=0 } = requestUrl.query;
    try {
      users.getUsers(start, limit, function(userList) {
        wrappedResponse(response).sendResult(200, userList);
      });
    } catch (error) {
      wrappedResponse(response).sendResult(400, { error: error.message });
    }
  } else {
    wrappedResponse(response).sendResult(404);
  }
});

server.listen(3000, function() {
  console.log('server listening on port 3000...');
});
