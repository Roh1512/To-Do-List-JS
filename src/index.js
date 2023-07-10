import './style.css'
import NewTask from "./NewTask";
import NewProject from "./NewProject";
import {createProjectDOM} from './createProjectDOM';
import { save,load } from './Save_Load';


let myTodos = [];//Local variables to store all Todos



const content = document.getElementById("content");
let localTasks = new NewProject("Local Tasks");
localTasks.setDueDate = localTasks.dueDate;
myTodos[0] = localTasks;


window.addEventListener("load",() => {
    load()

    content.appendChild(createProjectDOM(myTodos[0],myTodos))
    
})

export {myTodos}





