const express = require("express");
const router = express.Router();
const { getAllTodos, createTodo, getTodoById, updateTodoById } = require("./todoController")


// base url http://localhost:3001/
// get all todos
router.get("/", getAllTodos);

// get a specific todo by id
router.get("/:id",getTodoById )

// base url http://localhost:3001/
router.post("/", createTodo)


// update a specific todo by id
router.put("/:id", updateTodoById)

module.exports = router;