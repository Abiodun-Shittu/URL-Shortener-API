import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.get('/', (_, res) => {
	res.status(200).json({message: "URL Shortener is Running!!!"})
})

app.listen(port, () => {
	console.log(`Server Listening on http://locahost:${port}`);
});
