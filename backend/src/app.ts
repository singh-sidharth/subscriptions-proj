import express, { Request, Response } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routers";

const app = express();

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(
	cors({
		credentials: true,
	})
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/v1", router());

// same as const server = http.createServer(app).listen(8080);
const server = app.listen(PORT, () => {
	console.log("Listening at http://localhost:", PORT);
});

//setting up db
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => {
	console.log(error);
});
mongoose.connection.on("connection", (stream) => {
	console.log("successfully conncted to db....");
});

// app.use(express.urlencoded({ extended: true }));

/* app.get("/", (req: Request, res: Response) => {
	return res.send("Hello World!");
});

app.get("/api/v1", (req: Request, res: Response) => {
	console.log(req.body);
	return res.sendStatus(200);
});

app.all("/api/all", (req: Request, res: Response) => {
	res.sendStatus(200);
});

app
	.route("/api/")
	.get((req: Request, res: Response) => {
		return res.send("You made a get request");
	})
	.post((req: Request, res: Response) => {
		return res.send("You made a POST request");
	}); */
