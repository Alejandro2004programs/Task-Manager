import "./styles.css";
import {Todo, createTodo} from "./todo.js";
import {Project, createProject, projectsArray, findSelectedProject} from "./project.js";
import {DOM, setUpProjectDialog, setUpTodosDialog} from "./dom.js";
import {storageAvailable} from "./storage.js";

setUpProjectDialog();
setUpTodosDialog();

createProject("Default");
createTodo(projectsArray[0], "Finish Todo List", "Description goes here", "Due date here", "Priority: high");

window.debug = {
  projectsArray,
  createProject,
  createTodo
};

