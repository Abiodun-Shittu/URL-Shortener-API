import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import connection from "./database/db.js";
import urlRouter from "./routes/urlRoute.js";
import redirectRouter from "./routes/redirectRoute.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
connection();

app.get("/", (_, res) => {
	res.status(200).json({ message: "URL Shortener is Running!!!" });
});

app.use("/api/url", urlRouter);
app.use("/", redirectRouter);

app.listen(port, () => {
	console.log(`Server Listening on http://localhost:${port}`);
});
