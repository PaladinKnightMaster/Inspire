export class Content {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.query = data.query
    this.author = data.query
    this.largeImgUrl = data.largeImgUrl
    this.imgUrl = data.imgUrl





  }
  get imgTemplate() {
    return /*html*/`
<div class ="col-6 m-auto text-shadow">
<h4>${this.author}</h4>
</div>
`
  }

}