import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
});

export const Todo = model("Todo", TodoSchema);
