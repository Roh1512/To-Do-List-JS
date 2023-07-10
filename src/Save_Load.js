import NewProject from "./NewProject";
import { myTodos } from ".";

export {save,load};

function save(myTodos){
    let myTodoList = JSON.stringify(myTodos);
    localStorage.setItem('myTodos',myTodoList);
}
function load(myTodos){
    
    const todos = localStorage.getItem("myTodos");
    if(todos){
        myTodos = JSON.parse(todos);
    }
    for(let i=0;i<myTodos.length;i++){
        Object.setPrototypeOf(myTodos[i],NewProject.prototype);
    }

}