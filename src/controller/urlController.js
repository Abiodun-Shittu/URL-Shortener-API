import shortid from "shortid";
import validUrl from "valid-url";

import url from "../models/urlSchema.js";

const baseUrl = "https://url-shrink-it.herokuapp.com";

const shortenUrl = async (req, res) => {
	try {
		const { longUrl } = req.body;
		if (!validUrl.isUri(baseUrl)) {
			return res.status(401).json("Invalid Base URL");
		}
		const urlKey = shortid.generate();

		if (!validUrl.isUri(longUrl)) {
			return res.status(401).json("Invalid Long URL");
		}
		let findUrl = await url.findOne({
			shortUrl: "http://localhost:9000/gPWdAj_Fi",
		});
		console.log(findUrl)
		if (!findUrl) {
			const shortUrl = baseUrl + "/" + urlKey;
			findUrl = new url({
				longUrl,
				shortUrl,
				urlKey,
			});
			await findUrl.save();
			return res.status(201).json(findUrl);
		}
		return res.status(200).json(findUrl);
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json("An Error Occurred, Please Contact the System Admin");
	}
};

export default shortenUrl;
