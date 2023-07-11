import './style.css'
import NewTask from "./NewTask";
import NewProject from "./NewProject";
import {createProjectBtn, createProjectDOM} from './createProjectDOM';
import { save,load } from './Save_Load';
import ProjectDOM_BTN from './projectDomClass';


let myTodos = [];//Local variables to store all Todos
const projectDiv = document.getElementById("projects");
const maincontent = document.getElementById("mainContent");
const addProjectForm = document.getElementById("addProjectForm");

addProjectForm.addEventListener("submit",(e)=> {
    e.preventDefault();
    const newProject = createNewProject();
    console.log(newProject);
    myTodos.push(newProject);
    const newProjectDom = new ProjectDOM_BTN(newProject,myTodos);
    projectDiv.appendChild(newProjectDom.projectBtn);
    maincontent.replaceChildren(newProjectDom.projectDOM);
    save(myTodos)
});

window.addEventListener("load",() => {
    myTodos = load();
    maincontent.replaceChildren(document.createElement("h1").textContent = "No Project Selected. Add a project or select one.")
    for(let i=0; i<myTodos.length;i++){
        const newProjectDom = new ProjectDOM_BTN(myTodos[i],myTodos);
        projectDiv.appendChild(newProjectDom.projectBtn);
    }
})



function createNewProject() {
    const projectName = document.getElementById("addProjectText").value;
    const newProjectObj = new NewProject(projectName);
    return newProjectObj;
}

export {myTodos}





