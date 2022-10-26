import mongoose from "mongoose";

const { Schema } = mongoose;

const urlSchema = new Schema({
	urlId: String,
	longUrl: String,
	shortUrl: String,
	date: { type: String, default: new Date() },
});

export default mongoose.model("url", urlSchema);
