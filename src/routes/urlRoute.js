import express from "express";
import shortenUrl from "../controller/urlController.js";

const router = express.Router();

router.post("/shrink", shortenUrl);

export default router;
