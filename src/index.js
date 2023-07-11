import './style.css'
import NewTask from "./NewTask";
import NewProject from "./NewProject";
import {createProjectBtn, createProjectDOM} from './createProjectDOM';
import { save,load } from './Save_Load';
import ProjectDOM_BTN from './projectDomClass';
import emptyDOM from './emptyDOM';



let myTodos = [];//Local variables to store all Todos
const projectDiv = document.getElementById("projects");
const maincontent = document.getElementById("mainContent");
const addProjectForm = document.getElementById("addProjectForm");

const sideBar = document.getElementById("sideBar");
const screenSize = window.matchMedia("(max-width: 770px)");
function adjustSideBar(screenSize){
    if(screenSize.matches){
        sideBar.classList.add("hide");
    }else {
        sideBar.classList.remove("hide");
    }
}
screenSize.addEventListener("change",adjustSideBar);

const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click",() => {
    sideBar.classList.toggle("hide");
})


addProjectForm.addEventListener("submit",(e)=> {
    e.preventDefault();
    const projectName = document.getElementById("addProjectText")
    const newProject = new NewProject(projectName.value,"");
    console.log(newProject);
    myTodos.push(newProject);
    const newProjectDom = new ProjectDOM_BTN(newProject,myTodos);
    projectDiv.appendChild(newProjectDom.projectBtn);
    maincontent.replaceChildren(newProjectDom.projectDOM);
    save(myTodos);
});

window.addEventListener("load",() => {
    myTodos = load();
    adjustSideBar(screenSize);
    maincontent.replaceChildren(emptyDOM())
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





