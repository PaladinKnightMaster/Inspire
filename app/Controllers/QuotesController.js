import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuotes() {
  // @ts-ignore
  setHTML('quotes', appState.quotes.QuoteTemplate)
  console.log(appState.quotes)
}



export class QuotesController {

  constructor() {
    this.getQuotes()
    appState.on('quotes', _drawQuotes)
  }


  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error('[getQuote]', error)
      Pop.error(error)
    }
  }

}