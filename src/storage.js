import {Project, createProject} from "./project.js";
import {Todo, createTodo} from "./todo.js";

let projectsArray = [];

function updateLocalStorageArray() {
    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

function getLocalStorageArray() {
    const localStorageString = localStorage.getItem("projectsArray");
    const localStorageArray = JSON.parse(localStorageString);
    if(localStorageString) {
        for (let i = 0; i < localStorageArray.length; i++) {
            let currentProject = localStorageArray[i];
            createProject(localStorageArray[i].projectName);
            for(let j = 0; j < currentProject.todoList.length; j++) {
                let currentTodo = currentProject.todoList[j];
                createTodo(projectsArray[i], currentTodo.title, currentTodo.description, currentTodo.dueDate, currentTodo.priority);
            }
        }
    }
}


export {updateLocalStorageArray, getLocalStorageArray, projectsArray};
