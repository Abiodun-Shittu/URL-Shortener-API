import mongoose from "mongoose";

const { Schema } = mongoose;

const urlSchema = new Schema({
	longUrl: String,
	shortUrl: String,
	urlKey: String,
	date: { type: String, default: new Date() },
});

export default mongoose.model("url", urlSchema);
