import { Router } from "express";
import { register, login, logout } from "controllers/authentication.controller";

export default (router: Router) => {
	router.post("/auth/register", register);
	router.post("/auth/login", login);
	router.get("/auth/logout", logout);
};
