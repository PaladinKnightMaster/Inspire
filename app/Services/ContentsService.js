import { appState } from "../AppState.js"
import { Content } from "../Models/Content.js";
import { sandboxServer } from "./AxiosService.js"

class ContentsService {

  async getContent() {
    const res = await sandboxServer.get('/images')
    console.log('getPic', res.data);
    appState.content = new Content(res.data)


  }





}
export const contentsService = new ContentsService()