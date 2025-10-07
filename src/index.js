import "./styles.css";
import {Todo, createTodo} from "./todo.js";
import {Project, createProject, findSelectedProject} from "./project.js";
import {DOM, setUpProjectDialog, setUpTodosDialog, setUpProjectDeleteButton} from "./dom.js";
import {updateLocalStorageArray, getLocalStorageArray, projectsArray} from "./storage.js";

getLocalStorageArray();
if(projectsArray.length === 0) {
  createProject("Default");
  createTodo(projectsArray[0], "Finish Todo List", "Description goes here", "yyyy-mm-dd", "Priority: medium");
}

updateLocalStorageArray();
setUpProjectDialog();
setUpTodosDialog();
setUpProjectDeleteButton();
DOM.renderProjects();
DOM.renderTodos(projectsArray[0]);


window.debug = {
  projectsArray,
  createProject,
  createTodo
};


