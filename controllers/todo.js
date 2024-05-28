import { Todo } from "../models/todo.js";

export const getTodos = async (req, res) => {
	const todos = await Todo.find({});

	res.status(200).json({
		data: todos,
	});
};

export const createTodo = async (req, res) => {
	const { username } = req.body;

	const newTodo = new Todo({
		username,
	});
	await newTodo.save();

	res.status(200).json({
		msg: "created successful",
	});
};

export const deleteTodo = async (req, res) => {
	const { id } = req.params;

	await Todo.findByIdAndDelete(id);

	res.status(200).json({
		msg: "deleted successful",
	});
};

export const getTodo = async (req, res) => {
	const { id } = req.params;

	const todo = await Todo.findById(id);

	if (!todo) {
		return res.status(404).json({
			msg: "Todo not found",
		});
	}

	res.status(200).json({
		data: todo,
	});
};

export const updateTodo = async (req, res) => {
	const { id } = req.params;
	const { firstName, lastName } = req.body;

	console.log(firstName, lastName);

	// const todo = await Todo.findByIdAndUpdate(id);
	res.status(200).json({
		msg: "updated",
	});
};
