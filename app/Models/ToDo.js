export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.user = data.user

  }


  get ToDoTemplate() {
    return/*html*/`
<form class="col-2 card d-flex flex-wrap flex-row justify-content-between">
          <p>title</p>
          <p>4 left</p>
          <div class="card-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                <ul>${this.description}</ul>
              </label> </form>
              <form onsubmit="app.ToDoController.getToDo()">
              <input class="form-input" type="text" name="description" placeholder="add Todo" required minLength="3">
              <button class="btn" type="submit"></button>
              </form>
            </div>
          </div>
       

`
  }
}