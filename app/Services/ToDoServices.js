import { sandboxServer } from "./AxiosService.js";

class ToDoService {
  async getToDo() {
    const res = await sandboxServer.get('/YOURNAME/todos')
    console.log('getToDo', res.data);








  }







}
export const toDoService = new ToDoService()