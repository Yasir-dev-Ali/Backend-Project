import { Router } from "express";

import { createTodo, deleteTodo, getTodos, updateTodo } from "../Controller/Todo.controller.js";

const router = Router();
router.post("/create", createTodo);
router.get("/getTodos", getTodos);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

export default router;