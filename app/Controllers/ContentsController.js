import { appState } from "../AppState.js";
import { contentsService } from "../Services/ContentsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, } from "../Utils/Writer.js";
function _drawPicture() {
  let pic = appState.content
  // @ts-ignore
  document.querySelector('body').style.backgroundImage = `url(${pic.largeImgUrl})`
  // @ts-ignore
  setHTML('photo', pic.imgTemplate)
}



export class ContentsController {

  constructor() {
    this.getContent()
    appState.on('content', _drawPicture)



  }

  async getContent() {
    try {
      await contentsService.getContent()
    } catch (error) {
      console.log('[getPic]', error)
      Pop.error(error.message)
    }
  }

}