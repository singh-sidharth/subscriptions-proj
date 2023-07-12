import express, { Router } from "express";
import authentication from "./authentication.router";

const router = express.Router();

export default (): Router => {
	// Add all the routers here
	authentication(router);
	return router;
};
