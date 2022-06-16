const http = require('http');
const fs = require('fs');

const server = http.createServer(async (request, response) => {
	const readStream = fs.createReadStream('./test.txt', { encoding: 'utf-8' });
	response.setHeader('Content-Type', 'text/html');

	for await (const chunk of readStream) {
		response.write(chunk);
	}

	response.end();
});

server.listen(8080, () => {
	console.log('server started');
});
