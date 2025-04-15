class TaskView {
  constructor() {
    this.app = document.getElementById("app");
    this.taskList = document.getElementById("task-list");
    this.taskForm = document.getElementById("task-form");
    this.taskInput = document.getElementById("task-input");
  }

  displayTasks(tasks) {
    this.taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;
      this.taskList.appendChild(li);
    });
  }

  bindAddTask(handler) {
    this.taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const task = this.taskInput.value;
      if (task) {
        handler(task);
        this.taskInput.value = "";
      }
    });
  }
}

const taskView = new TaskView();
