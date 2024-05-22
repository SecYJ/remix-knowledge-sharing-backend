import { Todo } from "../models/todo.js";

export const getTodos = async (req, res) => {
	const todos = await Todo.find({});

	res.status(200).json({
		data: todos,
	});
};

export const createTodo = async (req, res) => {
	const { firstName, lastName } = req.body;

	const newTodo = new Todo({
		firstName,
		lastName,
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
