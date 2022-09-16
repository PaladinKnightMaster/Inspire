import { ToDoController } from "./Controllers/ToDoController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  todoController = new ToDoController()
}

window["app"] = new App();
