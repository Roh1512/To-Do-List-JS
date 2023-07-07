class NewTask {
    constructor(task,dueDate,id){
        this.id = /* new Date().getTime() */id;
        this.task = task;
        this.dueDate = dueDate;
        this.complete = false;
    }
    set completeStatus(value){
        if (typeof value === 'boolean') {
            this.complete = value;
        } else {
            throw new Error("Invalid value. Expected a boolean. At 'NewTask'.complete");
        }
    }
    set setDueDate(dueDate) {
        if(this.dueDate === undefined || this.dueDate === ""){
            this.dueDate = "No Due Date";
        }else if(dueDate instanceof Date && !isNaN(dueDate.getTime())) {
            this.dueDate = dueDate;
        }else {
            throw new Error("Expected a date. At NewTask")
        }
    }
}

export default NewTask;