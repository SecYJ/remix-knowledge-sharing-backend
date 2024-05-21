import express from "express";
import { createPost, getPost, updatePost } from "../controllers/post.js";

const router = express.Router();

router.route("/").get(getPost).patch(updatePost).post(createPost);

export default router;
