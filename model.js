class TaskModel {
  constructor() {
    if (TaskModel.instance) {
      return TaskModel.instance;
    }
    this.tasks = [];
    TaskModel.instance = this;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}

class AdvancedTask {
  constructor(description, category) {
    this.description = description;
    this.category = category;
  }
}

const taskModel = new TaskModel();
