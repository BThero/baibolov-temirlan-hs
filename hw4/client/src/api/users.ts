import axios from 'axios';

export async function login(user: { email: string; password: string }) {
	const res = await axios.post('http://localhost:4000/api/users/login', user);
	return res.data;
}

export async function register(user: {
	name: string;
	email: string;
	password: string;
}) {
	const res = await axios.post('http://localhost:4000/api/users', user);
	return res.data;
}
