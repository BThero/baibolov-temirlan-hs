const Person = require('./person');

class PersonService {
	constructor() {
		this._people = [];
	}

	getIndexByName(name) {
		// TODO: return index by name
		return this._people.findIndex((person) => person.name === name);
	}

	getByName(name) {
		// TODO: return by name
		const idx = this.getIndexByName(name);
		return idx === -1 ? undefined : this._people[idx];
	}

	getAll() {
		// TODO: return all
		return this._people;
	}

	deleteByName(name) {
		// TODO: delete by name
		this._people = this._people.filter((person) => person.name !== name);
	}

	save(person) {
		// TODO: find if exists
		// TODO: update if exist
		// TODO: insert id exist

		const idx = this.getIndexByName(person.name);

		if (idx === -1) {
			this._people.push(person);
		} else {
			this._people[idx] = person;
		}
	}
}

module.exports = PersonService;
