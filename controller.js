// Classe TaskController
class TaskController {
  // Constructeur
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Liaison gestion d'ajout de tâche à la vue
    this.view.bindAddTask(this.handleAddTask.bind(this));
    // Affiche tâches initiales
    this.view.displayTasks(this.model.getTasks());
  }

  // Gestion d'ajout de tâche
  handleAddTask(description, category) {
    const task = new AdvancedTask(description, category);
    this.model.addTask(task);
    this.view.displayTasks(this.model.getTasks());
    // Focus sur input après l'ajout de la tâche
    this.view.taskInput.focus();
  }
}

// Création instance
const taskController = new TaskController(taskModel, taskView);
