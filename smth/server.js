const http = require('http');
const hostname = '127.0.0.1';
const URL = require('url').URL;
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	const url = new URL(req.url, `http://${req.headers.host}`);

	if (url.pathname === '/test') {
		res.end('my custom text');
	} else {
		res.end('my default text');
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
