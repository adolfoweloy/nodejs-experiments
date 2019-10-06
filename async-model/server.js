const http = require('http');
const url = require('url');

const server = http.createServer(function(request, response) {
    const pathname = url.parse(request.url).pathname;
    const header = { 'Content-Type': 'application/json' };
    
    if (pathname === '/block') {
        let x = 0;
        while (x < 5000000000) {
            x++;
        }
        response.writeHead(200, header);
        response.write(JSON.stringify({ result: 'ok' }));
    } else if (pathname === '/nonblock') {
        response.writeHead(200, header);
        response.write(JSON.stringify({ result: 'ok' }));
    } else {
        response.writeHead(404, header);
    }
    response.end();
});

const port = 4000;
server.listen(port, function() {
    console.log(`listening to port ${port}`);
});