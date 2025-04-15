// Classe abstraite
class TaskRenderer {
  render(task) {
    throw new Error("Abstract method");
  }
}

// Classe concrète travail
class WorkTaskRenderer extends TaskRenderer {
  render(task) {
    const li = document.createElement("li");
    li.textContent = task.description;
    li.className = "work";
    return li;
  }
}

// Classe concrète personel
class PersonalTaskRenderer extends TaskRenderer {
  render(task) {
    const li = document.createElement("li");
    li.textContent = task.description;
    li.className = "personal";
    return li;
  }
}

// Classe concrète divers
class MiscellaneousTaskRenderer extends TaskRenderer {
  render(task) {
    const li = document.createElement("li");
    li.textContent = task.description;
    li.className = "miscellaneous";
    return li;
  }
}

// Classe gestion affichage des tâches + formulaire
class TaskView {
  constructor() {
    this.app = document.getElementById("app");
    this.taskList = document.getElementById("task-list");
    this.taskForm = document.getElementById("task-form");
    this.taskInput = document.getElementById("task-input");
    this.taskCategory = document.getElementById("task-category");
  }
  // Affichage des tâches
  displayTasks(tasks) {
    this.taskList.innerHTML = "";
    tasks.forEach((task) => {
      let renderer;
      switch (task.category) {
        case "work":
          renderer = new WorkTaskRenderer();
          break;
        case "personal":
          renderer = new PersonalTaskRenderer();
          break;
        case "miscellaneous":
          renderer = new MiscellaneousTaskRenderer();
          break;
        default:
          renderer = new MiscellaneousTaskRenderer();
      }
      const li = renderer.render(task);
      this.taskList.appendChild(li);
    });
  }

  // Liaison gestion d'ajout de tâche-formulaire
  bindAddTask(handler) {
    this.taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const task = this.taskInput.value;
      const category = this.taskCategory.value;
      if (task) {
        handler(task, category);
        this.taskInput.value = "";
      }
    });
  }
}

// Création instance de la vue
const taskView = new TaskView();
