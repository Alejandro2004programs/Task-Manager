class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.dataId = crypto.randomUUID();
    }
}

function createTodo(project, title, description, dueDate, priority) {
    const todo = new Todo(title, description, dueDate, priority);
    project.addTodo(todo);
    return todo;
}


export {Todo, createTodo};