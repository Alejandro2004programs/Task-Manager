import "./styles.css";
import {Todo, createTodo} from "./todo.js";
import {Project, createProject, projectsArray} from "./project.js";
import {DOM, setUpProjectDialog} from "./dom.js";

setUpProjectDialog();

createProject("Default");
createTodo(projectsArray[0], "Finish Todo List", "Description goes here", "Due date here", "Priority: high");

window.debug = {
  projectsArray,
  createProject,
  createTodo
};

