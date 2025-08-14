import "./styles.css";

console.log("testing");

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.dataId = crypto.randomUUID();
    }
}

class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoList = [];
        this.dataId = crypto.randomUUID();
    }
}

const projects = [];

function addProject(projectName) {
    let projectToAdd = new Project(projectName);
    projects.push(projectToAdd);
}

function addTodo(project, title, description, dueDate, priority) {
    let todo = new Todo(title, description, dueDate, priority);
    project.todoList.push(todo);
}


function displayMostRecentProject() {
    let projectContainer = document.querySelector(".projectsContainer");
    let currentProject = document.createElement("button");
    let project = projects.at(-1);
    currentProject.textContent = project.projectName;
    projectContainer.appendChild(currentProject);
}

function displayDefaultTodos() {
    
}

addProject("Default");
displayMostRecentProject();

addTodo(projects[0], "wash clothes", "finish washing clothes", "tonight", true);
console.log(projects);
console.log(projects.at(-1));