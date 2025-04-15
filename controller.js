class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddTask(this.handleAddTask.bind(this));
    this.view.displayTasks(this.model.getTasks());
  }

  handleAddTask(description, category) {
    const task = new AdvancedTask(description, category);
    this.model.addTask(task);
    this.view.displayTasks(this.model.getTasks());
  }
}

const taskController = new TaskController(taskModel, taskView);
