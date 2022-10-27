import url from "../models/urlSchema.js";

const redirectUrl = async (req, res) => {
	try {
		const { key } = req.params;
		const findUrl = await url.findOne({ urlKey: key });
		if (!findUrl) {
			return res.status(404).json("URL Not Found");
		}
		return res.redirect(findUrl.longUrl);
	} catch (err) {
		return res
			.status(500)
			.json("An Error Occurred, Please Contact the System Admin");
	}
};

export default redirectUrl;
