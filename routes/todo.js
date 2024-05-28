import express from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todo.js";

const router = express.Router();

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").delete(deleteTodo).get(getTodo).patch(updateTodo);

export default router;
