const request = require('supertest');
const app = require('./index');

describe('Test simple http server', () => {
	test('When request default should response the GET method with default text', (done) => {
		request(app)
			.get('/hello?a=b&q=c&q=d')
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.text).toBe('Hello!\na: b\nq: c,d\n');
				done();
			});

		request(app)
			.get('/hello?c=d')
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.text).toBe('Hello!\nc: d\n');
				done();
			});
	});

	// test('It should response the GET method', (done) => {
	// 	request(app)
	// 		.get('/test')
	// 		.then((response) => {
	// 			expect(response.statusCode).toBe(200);
	// 			expect(response.text).toBe('my custom text');
	// 			done();
	// 		});
	// });
});
