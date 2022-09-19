import { appState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandboxServer } from "./AxiosService.js"

class QuotesService {


  async getQuotes() {
    const res = await sandboxServer.get('/quotes')
    appState.quotes = new Quote(res.data)
  }

}
export const quotesService = new QuotesService()