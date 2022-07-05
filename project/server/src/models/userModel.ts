import mongoose from 'mongoose';

interface IUser {
	name: string;
	email: string;
	password: string;
}

const userSchema = new mongoose.Schema<IUser>(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);

export default User;
export { IUser };
