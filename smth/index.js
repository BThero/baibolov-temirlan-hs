const { application } = require('express');
var express = require('express');
var app = express();

let lastId = 12;

const data = [
	{
		id: 1,
		name: 'Temirlan',
		age: 18,
	},
	{
		id: 2,
		name: 'Mariya',
		age: 24,
	},
	{
		id: 3,
		name: 'Iman',
		age: 28,
	},
	{
		id: 4,
		name: 'Ansh',
		age: 23,
	},
	{
		id: 5,
		name: 'Nazar',
		age: 21,
	},
	{
		id: 6,
		name: 'Miguel',
		age: 22,
	},
	{
		id: 7,
		name: 'Takuma',
		age: 25,
	},
	{
		id: 8,
		name: 'Valeri',
		age: 20,
	},
	{
		id: 9,
		name: 'Yuri',
		age: 26,
	},
	{
		id: 10,
		name: 'Stas',
		age: 27,
	},
	{
		id: 11,
		name: 'Viktoriya',
		age: 24,
	},
	{
		id: 12,
		name: 'Alex',
		age: 35,
	},
];

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

app.post('/user', function (req, res) {
	res.setHeader('Content-Type', 'text/plain');
	console.log(req.body);

	const name = req.body.name;
	const age = req.body.age;

	if (!name || !age) {
		res.status(400);
		res.send('name or age query params are missing');
	}

	lastId++;

	const user = {
		id: lastId,
		name,
		age,
	};

	data.push(user);
	res.send(`Successfully created user ${JSON.stringify(user)}`);
});

app.get('/users', function (req, res) {
	res.setHeader('Content-Type', 'application/json');

	const items = data.filter((person) => {
		let match = true;

		Object.entries(req.query).forEach(([key, value]) => {
			if (person[key] != value) {
				match = false;
			}
		});

		return match;
	});

	if (items.length === 0) {
		res.json({
			error: 'Not found',
		});
	} else {
		res.json(items[0]);
	}
});

app.listen(3000);

module.exports = app;
