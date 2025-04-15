// Classe avec pattern Singleton
class TaskModel {
  constructor() {
    // Vérification instance déjà existante
    if (TaskModel.instance) {
      return TaskModel.instance;
    }
    this.tasks = [];
    // Instance actuelle = instance unique
    TaskModel.instance = this;
  }

  // Ajout de tâche
  addTask(task) {
    this.tasks.push(task);
  }

  // Récupération liste des tâches
  getTasks() {
    return this.tasks;
  }
}

// Classe tâche avancée avec description et catégorie
class AdvancedTask {
  constructor(description, category) {
    this.description = description;
    this.category = category;
  }
}

// Création instance du modèle
const taskModel = new TaskModel();
