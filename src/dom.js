import {createProject, projectsArray, Project} from "./project.js";

const DOM =  {
    renderProjects() {
        const projectsContainer = document.querySelector(".projectsContainer");
        projectsContainer.replaceChildren();
        for(let i = 0; i <= projectsArray.length - 1; i++) {
            const projectButton = document.createElement("button");
            projectButton.textContent = projectsArray[i].projectName;
            projectButton.setAttribute("class", ".projectButton");
            projectButton.setAttribute("data-id", projectsArray[i].dataId);
            projectsContainer.appendChild(projectButton);
            projectButton.addEventListener("click", () => {
                this.renderTodos(projectsArray[i]);
            });
        }
    },
    renderTodos(project) {
        const todoContainer = document.querySelector(".todoListContainer");
        todoContainer.replaceChildren();
        for(let i = 0; i <= project.todoList.length - 1; i++) {
            const currentTodo = project.todoList[i];
            const todoDiv = document.createElement("div");
            const todoLeft = document.createElement("div");
            const todoRight = document.createElement("div");
            todoLeft.setAttribute("class", "todoLeft");
            todoRight.setAttribute("class", "todoRight");
            todoDiv.setAttribute("class", "todo");
            const todoTitle = document.createElement("p");
            const todoDetails = document.createElement("button");
            const todoPriority = document.createElement("p");
            const todoDueDate = document.createElement("p");
            const todoRemove = document.createElement("button");
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

    addProjectButton.addEventListener("click", (event) => {
        event.preventDefault();
        const projectName = projectForm.projectName.value;
        createProject(projectName);
        DOM.renderProjects();
        projectDialog.close();
    });
}



export {DOM, setUpProjectDialog};

