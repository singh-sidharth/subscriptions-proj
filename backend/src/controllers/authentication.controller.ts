import { Request, Response } from "express";
import {
	logoutService,
	loginService,
	registerService,
} from "../services/authentication.service";

export const login = async (req: Request, res: Response) => {
	loginService(req, res);
};

export const register = async (req: Request, res: Response) => {
	registerService(req, res);
};

export const logout = async (req: Request, res: Response) => {
	logoutService(req, res);
};
