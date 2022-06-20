const Person = require('./person.js');

describe('Testing Person class', () => {
	let a = new Person(24, 'Mariya');

	beforeEach(() => {
		a = new Person(18, 'Temirlan');
	});

	it('Should have valid data', () => {
		expect(a).toBeTruthy();
		expect(a.age).toEqual(18);
		expect(a.name).toEqual('Temirlan');
	});

	it('Should have a proper birthday', () => {
		a.birthDay();
		expect(a.age).toEqual(19);
	});
});
