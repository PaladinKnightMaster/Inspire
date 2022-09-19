import { ContentsController } from "./Controllers/ContentsController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  let time = hh + ":" + mm + ":" + ss + " " + session;

  // @ts-ignore
  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () { currentTime() }, 1000);

}

currentTime();

class App {
  todoController = new ToDoController()
  contentController = new ContentsController()
  quotesController = new QuotesController()

  weatherController = new WeatherController()
}

window["app"] = new App();
