import "./styles.css";
import {Todo, createTodo} from "./todo.js";
import {Project, createProject, projectsArray, findSelectedProject} from "./project.js";
import {DOM, setUpProjectDialog, setUpTodosDialog} from "./dom.js";
import {storageAvailable} from "./storage.js";

setUpProjectDialog();
setUpTodosDialog();

createProject("Default");
createTodo(projectsArray[0], "Finish Todo List", "Description goes here", "Due date here", "Priority: high");
createProject("Project 2");
createTodo(projectsArray[1], "Keep working on the todo list", "desc.", "due date here", "Priority: medium");
createTodo(projectsArray[1], "Just testing multiple todos", "desc.", "due date here", "Priority: low");
createTodo(projectsArray[1], "Just testing multiple todos", "desc.", "due date here", "Priority: low");
createTodo(projectsArray[1], "Just testing multiple todos", "desc.", "due date here", "Priority: low");

DOM.renderProjects();

if (storageAvailable("localStorage")) {
  console.log("Yippee! We can use localStorage awesomeness");
} else {
  console.log("Too bad, no localStorage for us");
}

window.debug = {
  projectsArray,
  createProject,
  createTodo
};

