import { appState } from "../AppState.js";
import { toDoService } from "../Services/ToDoServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawToDo() {
  let template = ''
  appState.todo.forEach(t => template += t.ToDoTemplate)
  setHTML('todo', template)
  console.log("i am working")


}


export class ToDoController {

  constructor() {
    appState.on('todo', _drawToDo)
    this.getToDo()


  }

  async getToDo() {
    try {
      await toDoService.getToDo
    } catch (error) {
      console.error('getTodo', error)
      Pop.error(error.message)

    }



  }




}