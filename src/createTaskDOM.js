export default createTaskDOM;
import { save,load } from "./Save_Load";

function createTaskDOM(NewTaskObj,NewProjectObj,myTodos){
    const task = NewTaskObj;
    const project = NewProjectObj;
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.setAttribute("data-task-id", task.id);

    const taskText = document.createElement("p");
    taskText.classList.add("taskText");
    taskText.textContent = NewTaskObj.task;
    taskDiv.appendChild(taskText);

    const taskDueDate = document.createElement("div");
    taskDueDate.classList.add("taskDueDateText");
    taskDueDate.textContent = NewTaskObj.dueDateTxt;
    taskDiv.appendChild(taskDueDate);

    const taskStatusBtn = document.createElement("button");
    taskStatusBtn.setAttribute("type","button");
    taskStatusBtn.setAttribute("id","taskStatusBtn")
    taskStatusBtn.classList.add("taskStatusBtn");
    taskStatusBtn.classList.add("taskBtn")
    taskStatusBtn.textContent = task.complete ? "Done" : "Not Done";
    if(task.complete === true) {
        taskStatusBtn.classList.add("taskDone");
        taskStatusBtn.classList.remove("taskNotDone");
        taskText.classList.add("taskComplete");
    }else {
        taskStatusBtn.classList.add("taskNotDone");
        taskStatusBtn.classList.remove("taskDone");
        taskText.classList.remove("taskComplete");
    }

    taskDiv.appendChild(taskStatusBtn);
    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.setAttribute("type","button");
    taskDeleteBtn.classList.add("taskBtn")
    taskDeleteBtn.classList.add("taskDeleteBtn");
    taskDeleteBtn.textContent = "Delete";
    taskDiv.appendChild(taskDeleteBtn);

    //Event Listeners
    taskDeleteBtn.addEventListener("click", () => {
        for (let i = 0; i < myTodos.length; i++) {
            if(myTodos[i].id === project.id){
                for(let j=0;j<myTodos[i].tasks.length;j++){
                    if(myTodos[i].tasks[j].id === task.id){
                        myTodos[i].deleteTask = task.id;
                    }
                }
            }
        }
        // Remove the task element from the DOM
        const taskId = taskDiv.getAttribute("data-task-id");
        // Remove all taskDiv elements with the same task id
        const taskDivs = document.querySelectorAll(`[data-task-id="${taskId}"]`);
        taskDivs.forEach((div) => div.remove());
        save(myTodos);
    });

    taskStatusBtn.addEventListener("click",(e) => {
        e.stopPropagation()
        for (let i = 0; i < myTodos.length; i++) {
            if(myTodos[i].id === project.id){
                for(let j=0;j<myTodos[i].tasks.length;j++){
                    if(myTodos[i].tasks[j].id === task.id){
                        if(myTodos[i].tasks[j].complete === false){
                            myTodos[i].tasks[j].complete = true;
                            taskStatusBtnChange(myTodos[i].tasks[j]);
                            myTodos[i].tasksThisWeek();
                            myTodos[i].tasksToday();
                        }else if(myTodos[i].tasks[j].complete === true){
                            myTodos[i].tasks[j].complete = false;
                            taskStatusBtnChange(myTodos[i].tasks[j]);
                            myTodos[i].tasksThisWeek();
                            myTodos[i].tasksToday();
                        }
                    }
                }
            }
        }
        save(myTodos);
        myTodos = load();
        
        function taskStatusBtnChange(project) {
            const taskID = taskDiv.getAttribute("data-task-id")
            const taskDivs = document.querySelectorAll(`[data-task-id="${taskID}"]`);
            taskDivs.forEach((div) => {
                const taskStatusBtn = div.querySelector(".taskStatusBtn");
                const taskText = div.querySelector(".taskText")

                if(project.complete === true){
                    taskStatusBtn.textContent = "Done";
                    taskStatusBtn.classList.add("taskDone");
                    taskStatusBtn.classList.remove("taskNotDone");
                    taskText.classList.add("taskComplete");
                }else {
                    taskStatusBtn.textContent = "Not Done";
                    taskStatusBtn.classList.add("taskNotDone");
                    taskStatusBtn.classList.remove("taskDone");
                    taskText.classList.remove("taskComplete");
                }
            })
            save(myTodos)
        }
    })
    return taskDiv;
}