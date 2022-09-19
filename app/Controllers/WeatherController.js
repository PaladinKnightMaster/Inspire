import { appState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawWeather() {
  // @ts-ignore
  setHTML('weather', appState.weather.WeatherTemplate)
  console.log(appState.weather)
}
export class WeatherController {

  constructor() {
    this.getWeather()
    appState.on('weather', _drawWeather)



  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error('[getWeather]', error)
      Pop.error(error)
    }
  }



}