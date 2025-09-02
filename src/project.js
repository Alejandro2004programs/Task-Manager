class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoList = [];
        this.dataId = crypto.randomUUID();
    }
    addTodo(todo) {
        this.todoList.push(todo);
    }
    removeTodo(dataId) {
        this.todoList = this.todoList.filter(todo => todo.dataId !== dataId);
    }
}

const projectsArray = [];

function createProject(projectName) {
    let projectToAdd = new Project(projectName);
    projectsArray.push(projectToAdd);
}

export {Project, projectsArray, createProject};