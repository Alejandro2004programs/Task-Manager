import "./styles.css";
import {Todo, createTodo} from "./todo.js";
import {Project, createProject, projectsArray} from "./project.js";
import {DOM, setUpProjectDialog} from "./dom.js";

setUpProjectDialog();
createProject("Default");
createTodo(projectsArray[0], "Finish Todo List", "Description goes here", "Due date here", "Priority: high");
createProject("Project 2");
createTodo(projectsArray[1], "Keep working on the todo list", "desc.", "due date here", "Priority: medium");
createTodo(projectsArray[1], "Just testing multiple todos", "desc.", "due date here", "Priority: low");
createTodo(projectsArray[1], "Just testing multiple todos", "desc.", "due date here", "Priority: low");
createTodo(projectsArray[1], "Just testing multiple todos", "desc.", "due date here", "Priority: low");

DOM.renderProjects();


window.debug = {
  projectsArray,
  createProject,
  createTodo
};

