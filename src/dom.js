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
        }
    },
    renderTodos(project) {
        const todoContainer = document.querySelector(".todoListContainer");
        todoContainer.replaceChildren();

        for(let i = 0; i <= project.TodoList; i++) {
            const todoDiv = document.createElement("div");
            const todoLeft = document.createElement("div");
            const todoRight = document.createElement("div");
            todoLeft.setAttribute("class", "todoLeft");
            todoRight.setAttribute("class", "todoRight");
            todoDiv.appendChild(todoLeft);
            todoDiv.appendChild(todoRight);
            
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

