import "./styles.css";
import Todo from "./todo.js";
import Project from "./project.js";
import {DOM} from "./dom.js";

function createProject(projectName) {
    let projectToAdd = new Project(projectName);
    projects.push(projectToAdd);
}

function createTodo(project, title, description, dueDate, priority) {
    const todo = new Todo(title, description, dueDate, priority);
    project.addTodo(todo);
    return todo;
}

const projects = [];
createProject("Default");
createTodo(projects[0], "Random Title", "random description", "random due date", "random priority");

function displayMostRecentProject() {
    const projectsContainer = document.querySelector(".projectsContainer");
    let currentProjectDOM = document.createElement("button");
    const currentProjectDataId = projects.at(-1).dataId;
    currentProjectDOM.setAttribute("data-id", currentProjectDataId);
    let currentProjectJS = projects.at(-1);
    let currentProjectName = currentProjectJS.projectName;
    currentProjectDOM.textContent = currentProjectName;
    projectsContainer.appendChild(currentProjectDOM);
    
    currentProjectDOM.addEventListener("click", () => {
        const todoListContainer = document.querySelector(".todoListContainer");
        todoListContainer.replaceChildren();
        const currentTodoList = projects.at(-1).todoList;
        for(let i = 0; i < projects.length.todoList - 1; i++) {
            const currentTodoDOM = document.createElement("div");
            currentTodo.setAttribute("class", ".todo");
            const currentTodo = currentTodoList[i];
            const todoTitleDOM = document.createElement("p");
            todoTitleDOM.textContent = currentTodo.title;
            const todoPriorityDOM = document.createElement("p");
            todoPriorityDOM.textContent = currentTodo.priority;
            const todoDueDateDOM = document.createElement("p");
            todoDueDateDOM.textContent = currentTodo.dueDate;
            currentTodoDOM.appendChild(todoTitleDOM);
            currentTodoDOM.appendChild(todoPriorityDOM);
            currentTodoDOM.appendChild(todoDueDateDOM);
            const todoRemoveIcon = document.createElement("img");
            todoRemoveIcon.setAttribute("src", "images/checkmarkIcon.jpg");
            todoRemoveIcon.setAttribute("class", "todoRemoveIcon");
            todoRemoveIcon.setAttribute("alt", "X");
            currentTodoDOM.appendChild(todoRemoveIcon);
            todoListContainer.appendChild(currentTodoDOM);
        }
    });
}

function setUpProjectDialog() {
    const projectDialogButton = document.querySelector(".projectDialogButton");
    const projectDialog = document.querySelector(".projectDialog");
    const projectForm = document.querySelector(".projectForm");
    const addProjectButton = document.querySelector(".addProjectButton");
    const cancelProjectButton = document.querySelector(".cancelProjectButton");

    projectDialogButton.addEventListener("click", () => {
        projectDialog.showModal();
    });

    cancelProjectButton.addEventListener("click", () => {
        projectDialog.close();
    });

    addProjectButton.addEventListener("click", (event) => {
        event.preventDefault();
        const projectName = projectForm.projectName.value;
        createProject(projectName);
        displayMostRecentProject();
        projectDialog.close();
    });


}


function setUpDefaultButton() {
    const defaultProjectButton = document.querySelector(".projectButton");
    const defaultProjectId = projects[0].dataId;
    console.log(defaultProjectId);
    defaultProjectButton.setAttribute("data-id", defaultProjectId);
    defaultProjectButton.getAttribute("data-id");
}



setUpProjectDialog();
setUpDefaultButton();


window.debug = {
  projects,
  createProject,
  createTodo
};