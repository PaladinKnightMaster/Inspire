export class Quote {
  constructor(data) {
    this.id = data.id
    this.quote = data.quote
    this.body = data.body
    this.author = data.author
    this.tags = data.tags
    this.description = data.description || data.content



  }

  get QuoteTemplate() {
    return/*html*/`
    
    <h5 class="text-shadow">${this.description}</h5>
    <p class="on-hover text-shadow">${this.author}</p>





`
  }








}