import { UserModel } from "../models/users.schema";

export const getUsers = () => UserModel.find();
export const getUserById = (id: string) => UserModel.findById(id);
export const getUserByMobile = (mobile: string) =>
	UserModel.findOne({ mobile });

export const getUserBySessionToken = (sessionToken: string) => {
	return UserModel.findOne({ "authentication.sessionToken": sessionToken });
};

export const createUser = (values: Record<string, any>) =>
	new UserModel(values).save().then((user) => user.toObject());

export const deleteUserById = (id: string) =>
	UserModel.findByIdAndDelete({ _id: id });

export const updateUserById = (
	id: string,
	values: Record<string, typeof UserModel>
) => UserModel.findByIdAndUpdate(id, values);
