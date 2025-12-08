const todos = []

// get all todos

exports.getAllTodos = (req, res) => {
    res.send(todos);
}

exports.createTodo = (req, res) => {
    const { title, description} = req.body;
    
    todos.push({
        id: new Date().getTime().toString(),
        title,
        description
    })

    res.send({ message: "Todo created successfully" });

}

exports.getTodoById = (req, res) => {
    const { id } = req.params;

    const todo = todos.find((t) => t.id === id);

    if (!todo) {
        return res.send({ message: "Todo not found" });
    }

    res.send(todo);
}

exports.updateTodoById = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const todoIndex = todos.findIndex((t) => t.id === id);

    if (todoIndex === -1) {
        return res.send({ message: "Todo not found" });
    }

    todos[todoIndex] = {
        id, 
        title, 
        description
    }

    res.send({ message: "Todo updated successfully", todo: todos[todoIndex] });
}