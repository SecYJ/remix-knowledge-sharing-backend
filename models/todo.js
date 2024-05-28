import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
	username: String
});

export const Todo = model("Todo", TodoSchema);
