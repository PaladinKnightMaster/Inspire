import { appState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { Pop } from "../Utils/Pop.js";
import { sandboxServer } from "./AxiosService.js";

class ToDoService {
  async createToDo(formData) {
    const res = await sandboxServer.post('/JacobN/todos', formData)
    console.log('createToDo', res.data);
    let todo = new ToDo(res.data)
    appState.todo = [...appState.todo, todo]


  }


  async getToDo() {
    const res = await sandboxServer.get('/JacobN/todos', FormData)
    appState.todo = res.data.map(t => new ToDo(t))

  }
  async deleteToDo(id) {
    const yes = await Pop.confirm("Delete ToDo?🤔")
    if (!yes) { return }
    await sandboxServer.delete(`JacobN/todos/${id}`)
    appState.todo = appState.todo.filter(t => t.id != id)
  }

  async todoCheck(id) {
    const todo = appState.todo.find(todo => todo.id == id)
    if (!todo) {
      throw new Error('bad id')
    }
    todo.completed = !todo.completed
    await sandboxServer.put(`JacobN/todos/${id}`, todo)
    appState.emit('todo')


  }

}
export const toDoService = new ToDoService()