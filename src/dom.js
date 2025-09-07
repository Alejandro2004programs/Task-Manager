import {createProject, Project, findSelectedProject} from "./project.js";
import {createTodo, Todo} from "./todo.js";
import {projectsArray, getLocalStorageArray, updateLocalStorageArray} from "./storage.js";

const DOM =  {
    renderProjects() {
        const projectsContainer = document.querySelector(".projectsContainer");
        projectsContainer.replaceChildren();
        for(let i = 0; i <= projectsArray.length - 1; i++) {
            const projectButton = document.createElement("button");
            projectButton.textContent = projectsArray[i].projectName;
            projectButton.setAttribute("class", "projectButton");
            projectButton.setAttribute("data-id", projectsArray[i].dataId);
            projectsContainer.appendChild(projectButton);
            projectButton.addEventListener("click", () => {
                this.renderTodos(projectsArray[i]);
            });
        }
    },
    renderTodos(project) {
        const mainContentHeader = document.querySelector(".mainContentHeader");
        const todoHeader = document.querySelector(".todoSectionHeader");
        mainContentHeader.removeChild(todoHeader);
        const newTodoHeader = document.createElement("div");
        newTodoHeader.setAttribute("class", "todoSectionHeader");
        newTodoHeader.textContent = project.projectName + " Todo's";
        const todoAddButtonContainer = document.querySelector(".projectDialogButtonContainer");
        mainContentHeader.insertBefore(newTodoHeader, todoAddButtonContainer);
        const todoContainer = document.querySelector(".todoListContainer");
        todoContainer.replaceChildren();        
        for(let i = 0; i <= project.todoList.length - 1; i++) {
            const currentTodo = project.todoList[i];
            const todoDiv = document.createElement("div");
            const todoLeft = document.createElement("div");
            const todoRight = document.createElement("div");
            const todoId = currentTodo.dataId;
            todoDiv.setAttribute("data-id", todoId);
            todoLeft.setAttribute("class", "todoLeft");
            todoRight.setAttribute("class", "todoRight");
            todoDiv.setAttribute("class", "todo");
            const todoTitle = document.createElement("p");
            const todoDetails = document.createElement("button");
            const todoPriority = document.createElement("p");
            const todoDueDate = document.createElement("p");
            const todoRemove = document.createElement("button");
            todoRemove.setAttribute("class", "removeTodoButton");
            todoTitle.textContent = currentTodo.title;
            todoDetails.textContent = "Details";
            todoPriority.textContent = currentTodo.priority;
            todoDueDate.textContent = currentTodo.dueDate;
            todoRemove.textContent = "✓";
            todoLeft.appendChild(todoTitle);
            todoRight.appendChild(todoDetails);
            todoRight.appendChild(todoPriority);
            todoRight.appendChild(todoDueDate);
            todoRight.appendChild(todoRemove);
            todoDiv.appendChild(todoLeft);
            todoDiv.appendChild(todoRight);
            todoContainer.appendChild(todoDiv);
            todoRemove.addEventListener("click", () => {
                todoContainer.removeChild(todoDiv);
                const currentProject = findSelectedProject();
                currentProject.removeTodo(todoId);
                updateLocalStorageArray()
            });
        }
    }
};

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

    projectDialog.addEventListener("submit", (event) => {
        event.preventDefault();
        const projectName = projectForm.projectName.value;
        createProject(projectName);
        DOM.renderProjects();
        updateLocalStorageArray();
        projectDialog.close();
    });
}

function setUpTodosDialog() {
    const todoDialogButton = document.querySelector(".todoDialogButton");
    const todoDialogElement = document.querySelector(".todoDialogElement");
    const todoDialogCancelButton = document.querySelector(".todoDialogCancelButton");
    const addTodoButton = document.querySelector(".addTodoButton");
    const todoForm = document.querySelector(".todoForm");

    todoDialogButton.addEventListener("click", () => {
        todoDialogElement.showModal();
    });

    todoDialogCancelButton.addEventListener("click", () => {
        todoDialogElement.close()
    });
    todoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const todoName = todoForm.todoFormTitle.value;
        const todoDescription = todoForm.todoFormDetails.value;
        const todoDueDate = todoForm.todoFormDueDate.value;
        const todoPriority = "Priority: " + todoForm.todoFormPriority.value;
        createTodo(findSelectedProject(), todoName, todoDescription, todoDueDate, todoPriority);
        DOM.renderTodos(findSelectedProject());
        updateLocalStorageArray();
        todoDialogElement.close();
    });
}

function setUpProjectDeleteButton() {
    const projectDeleteButton = document.querySelector(".projectDeleteButton");
    projectDeleteButton.addEventListener("click", () => {
        const currentProjectName = document.querySelector(".todoSectionHeader").textContent.split(" ")[0];
        projectsArray.splice(0,projectsArray.length,...projectsArray.filter(project => project.projectName !== currentProjectName));
        DOM.renderProjects();
        if(projectsArray.length != 0) {
            DOM.renderTodos(projectsArray[0]);
        }
        updateLocalStorageArray();
    });
}


export {DOM, setUpProjectDialog, setUpTodosDialog, setUpProjectDeleteButton};

