/**
 In order to run this server as a script, run the following command:
 npm run async-test
**/

const http = require('http');
const url = require('url');
const sreq = require('sync-request');

const sendResponse = function(response, content) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({content: content}));
    response.end();
}

http.createServer(function(request, response) {
    const requestUrl = url.parse(request.url);
    if (requestUrl.pathname === '/sync') {
        console.log('started executing sync');

        // calling the server synchronously
        var res = sreq('GET', 'http://localhost:4000/block');
        console.log(JSON.parse(res.getBody()));
        console.log('finished executing sync');

        sendResponse(response, 'response from sync');
    } else if (requestUrl.pathname === '/async') {
        console.log('started executing async');
        
        // calling the server asynchronously
        let data = '';

        http.get('http://localhost:4000/block', function(message) {
            message.on('data', function(chunk) {
                data += chunk;
            });
            message.on('end', function() {
                response.writeHead(200, {'Content-Type': 'application/json'});
                console.log(data);
                response.write(data);
                response.end();
            });
            message.on('error', function(err) {
                response.writeHead(500, {'Content-Type': 'application/json'});
                response.write(JSON.stringify({msg: err.message}));
                response.end();
            });
        });

        // I still don't know why the setTimeout blocks other requests when response.end is not called.
        
        // setTimeout(function() {
        //     var res = sreq('GET', 'http://localhost:4000/block');
        //     console.log(JSON.parse(res.getBody()));
        //     sendResponse(response, 'response from async');
        // }, 0);

        console.log('finished executing async');
    } else {
        sendResponse(response, 'response from nothing');
    }
    
}).listen(3000, function() {
    console.log('listening on port 3000');
});

console.debug(sreq);