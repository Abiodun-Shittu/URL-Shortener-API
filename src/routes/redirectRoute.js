import express from "express";
// import redirectUrl from "../controller/redirectController.js";

const router = express.Router();

router.get("/:key", async (req, res) => {
	try {
		const { key } = req.params;
		const findUrl = urlSchema.findOne({ urlKey: key });
		if (!findUrl) {
			return res.status(404).json("URL Not Found");
		}
		console.log("Break here\n")
		console.log(findUrl)
		return res.redirect(findUrl.longUrl);
	} catch (err) {
		return res
			.status(500)
			.json("An Error Occurred, Please Contact the System Admin");
	}
});

export default router;
