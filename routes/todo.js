import express from "express";
import { createTodo, deleteTodo, getTodos } from "../controllers/todo.js";

const router = express.Router();

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").delete(deleteTodo);

export default router;