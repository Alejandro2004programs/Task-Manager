import "./styles.css";
import {Todo, createTodo} from "./todo.js";
import {Project, createProject, projectsArray, findSelectedProject} from "./project.js";
import {DOM, setUpProjectDialog, setUpTodosDialog} from "./dom.js";

createProject("Default");
createTodo(projectsArray[0], "Finish Todo List", "Description goes here", "YYYY-MM-DD", "Priority: high");
setUpProjectDialog();
setUpTodosDialog();
DOM.renderProjects();
DOM.renderTodos(projectsArray[0]);

window.debug = {
  projectsArray,
  createProject,
  createTodo
};

