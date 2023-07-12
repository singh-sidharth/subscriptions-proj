import express, { Request, Response } from "express";
import { authentication, random } from "../utils";
import { error } from "console";
import { createUser, getUserByMobile } from "./users.db.service";

export const loginService = async (req: Request, res: Response) => {
	try {
		const { mobile, password } = req.body;

		if (!mobile || !password) {
			return res.status(400).send("Mobile or password missing");
		}

		//TODO: Handle getting user
		const user = await getUserByMobile(mobile).select(
			"+authentication.salt +authentication.password"
		);

		if (!user) {
			return res.status(400).send("Please check your mobile number");
		}

		const expectedHash = authentication(user.authentication.salt, password);
		if (user.authentication.password !== expectedHash) {
			return res.status(403).send("Bad user password");
		}

		//If user logged in , we update the authentication token
		const salt = random();
		user.authentication.sessionToken = authentication(
			salt,
			user._id.toString()
		);
		await user.save();

		//save the cookie
		res.cookie("SESSION-TOKEN", user.authentication.sessionToken);

		res.status(200).json(user).end();
	} catch (e) {
		error(e);
	}
};

export const registerService = async (req: Request, res: Response) => {
	try {
		const { email, mobile, password, username } = req.body;

		if (!mobile || !password || !username) {
			throw Error("Missing fields");
		}

		//TODO: Handle existing users

		const existingUser = await getUserByMobile(mobile);

		if (existingUser) {
			return res.status(400).send("User already exists!");
		}

		// Create salt
		const salt = random();
		const user = await createUser({
			email,
			mobile,
			username,
			authentication: {
				salt,
				password: authentication(salt, password),
			},
		});
	} catch (e) {
		console.error(e);
		return res.status(400).send("Something went wrong with authentication!");
	}
};

export function logoutService(req: Request, res: Response) {}
