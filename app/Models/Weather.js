export class Weather {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.main = data.main
    this.weather = data.weather
    this.icon = data.icon
    this.weather.description = data.weather.description

  }

  get WeatherTemplate() {
    return/*html*/ `
<h1 class="text-shadow selectable">${this.main.temp}</h1>
<h5 class="text-shadow">${this.weather[0].description}</h5>


`
  }




}