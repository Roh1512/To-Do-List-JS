import NewTask from "./NewTask";
import NewProject from "./NewProject";

let project1 = new NewProject("Project1", new Date('1995-12-17T03:24:00'))

let a = new NewTask("a",new Date('2023-07-08T03:24:00'),1);
let b = new NewTask("b",new Date('2023-07-07T03:24:00'),2);
let c = new NewTask("c",new Date('2023-07-07T03:24:00'),3);
let d = new NewTask("d",new Date('2023-07-09T03:24:00'),4);
a.setDueDate = a.dueDate;
a.completeStatus = false;
project1.addtask = a;
project1.addtask = b;
project1.addtask = c;
project1.addtask = d;
console.log(a);
console.log("Project : \n",project1);

const localTasks = new NewProject("LocalTasks");

localTasks.addtask = a;
localTasks.addtask = b;
localTasks.addtask = c;
localTasks.addtask = d;

project1.deleteTask = a.id;
console.log("Project 1 Modified",project1)
console.log("Local Tasks :\n",localTasks)