
import { createProjectDOM,createProjectBtn } from "./createProjectDOM";
class ProjectDOM_BTN {
    constructor(newProjectObj,myTodos){
        this.id = newProjectObj.id;
        this.projectDOM = createProjectDOM
        (newProjectObj,myTodos);
        this.projectBtn = createProjectBtn(newProjectObj,myTodos,this.projectDOM);
        this.projectBtn.addEventListener("click",() => {
            const mainContent = document.getElementById("mainContent");
            mainContent.replaceChildren(this.projectDOM);
        })
    }
}

export default ProjectDOM_BTN;