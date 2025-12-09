const Todo = require("./todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error retrieving todos", error });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTodo = await Todo.create({ title, description });
    await newTodo.save();

    res.send({ message: "Todo created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error creating todo", error });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.send({ message: "Todo not found" });
    }

    res.send(todo);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving todo", error });
  }
};

exports.updateTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).send({ message: "Todo not found" });
    }

    res.send({ message: "Todo updated successfully", todo: updatedTodo });
  } catch (error) {
    res.status(500).send({ message: "Error updating todo", error });
  }
};
