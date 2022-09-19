import { appState } from "../AppState.js";
import { WeatherController } from "../Controllers/WeatherController.js";
import { Weather } from "../Models/Weather.js";
import { sandboxServer } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    const res = await sandboxServer.get('/weather')
    appState.weather = new Weather(res.data)
  }






}
export const weatherService = new WeatherService()