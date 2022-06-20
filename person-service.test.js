const { isTypedArray } = require('util/types');
const PersonService = require('./person-service');
const Person = require('./person');
const { exportAllDeclaration } = require('@babel/types');

describe('Validate PersonService class', () => {
	it('works', () => {
		const service = new PersonService();

		service.save(new Person(18, 'Temirlan'));

		expect(service.getByName('Temirlan')).toMatchObject(
			new Person(18, 'Temirlan')
		);

		service.deleteByName('asdf');

		expect(service.getByName('Temirlan')).toMatchObject(
			new Person(18, 'Temirlan')
		);

		service.deleteByName('Temirlan');

		expect(service.getByName('Temirlan')).toEqual(undefined);

		service.save(new Person(24, 'Mariya'));
		service.save(new Person(28, 'Iman'));
		service.save(new Person(23, 'Ahlam'));
		service.save(new Person(25, 'Abrar'));
		service.save(new Person(21, 'Nazar'));
		service.save(new Person(23, 'Ansh'));
	});
});
