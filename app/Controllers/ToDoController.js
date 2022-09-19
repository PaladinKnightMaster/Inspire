import { appState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { toDoService } from "../Services/ToDoServices.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawToDo() {
  let template = ''
  appState.todo.forEach(t => template += t.ToDoTemplate)
  appState.todo.length

  setHTML('todoCompleted', appState.todo.length)
  setHTML('todo', template)



}


export class ToDoController {

  constructor() {
    appState.on('todo', _drawToDo)
    this.showToDo()

  }

  async createToDo() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      await toDoService.createToDo(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('createToDo', error)
      Pop.error(error.message)

    }
  }

  async getToDo() {
    try {
      await toDoService.getToDo()
    } catch (error) {
      console.error('[GetToDo', error)
      Pop.error(error)
    }
  }

  async deleteTodo(id) {
    try {
      await toDoService.deleteToDo(id)
    } catch (error) {
      console.error('[DeletingTodo]', error)
      Pop.error(error)

    }
  }

  async todoCheck(id) {
    await toDoService.todoCheck(id)
    console.log("this is checked")
  }


  showToDo() {
    this.getToDo()
    setHTML('todo', _drawToDo)
  }



}


