import { appState } from "../AppState.js"

export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
    this.descId = data.descId
  }

  // TODO this is where you left off showing the done and not done items 
  get ToDoTemplate() {
    return/*html*/`
    <div>${this.completed}</div>
<div class="form-check">
              <input class="form-check-input" type="checkbox"  id="description" onchange="app.todoController.todoCheck('${this.id}')"${this.completed ? 'checked' : ''}>
              <label onchange="app.todoController.todoCheck('${this.id}')"class="form-check-label" id="description">
              <ul >
      <ul class=" p-2 rounded ">${this.description}<i class="mdi mdi-delete selectable p-1" onclick="app.todoController.deleteTodo('${this.id}')"></i> </ul>
              </label>
</form>
</div>
`
  }




}


