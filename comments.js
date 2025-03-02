// Create web server
// Create a web server that will respond to requests for a specific URL and will return a specific response. 
// The server will be running on port 3000.

// The server will respond to requests for the /comments URL. 
// The response will be a JSON response with an array of comments.
// The server will respond to requests for any other URL with a 404 status code and a JSON response with a message property set to "Not Found".

// The server will respond to requests using the GET method only.

// The server will be running on port 3000.

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    const pathname = urlObj.pathname;

    if (pathname === '/comments') {
        const comments = [
            { id: 1, author: 'John', body: 'Hello, World!' },
            { id: 2, author: 'Jane', body: 'Hi there!' },
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});