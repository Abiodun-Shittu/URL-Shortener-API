import express from "express";
import redirectUrl from "../controller/redirectController.js";

const router = express.Router();

router.get("/:key", redirectUrl);

export default router;
