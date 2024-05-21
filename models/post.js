import { Schema, model } from "mongoose";

const PostSchema = new Schema({
	title: String,
	content: String,
	isRead: Boolean,
});

export default model("Post", PostSchema);
