import express, { Request, Response } from "express";

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
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
	});

app.listen(3000, () => {
	console.log("Listening at http://localhost:", 3000);
});
