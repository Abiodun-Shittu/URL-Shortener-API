import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connection from "./database/db.js";
import urlRouter from "./routes/urlRoute.js";
import redirectRouter from "./routes/redirectRoute.js";

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
connection();

app.get("/", (_, res) => {
	res.status(200).json({ message: "URL Shortener is Running!!!" });
});

app.use("/urlShortener/", urlRouter);
app.use("/", redirectRouter);

app.listen(port, () => {
	console.log(`Server Listening on http://locahost:${port}`);
});
