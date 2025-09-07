import {projectsArray} from "./storage.js";

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

function createProject(projectName) {
    let projectToAdd = new Project(projectName);
    projectsArray.push(projectToAdd);
}

function findSelectedProject () {
    const todoSectionHeader = document.querySelector(".todoSectionHeader");
    const currentProjectName = todoSectionHeader.textContent.split(" ")[0];
    for(let i = 0; i <= projectsArray.length; i++) {
        if(projectsArray[i].projectName === currentProjectName) {
            return projectsArray[i];
        }
    }
}

export {Project, createProject, findSelectedProject};