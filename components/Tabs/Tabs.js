class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement
    this.data = tabElement.dataset.tab;
    this.data == 'all'
      ?this.cards = document.querySelectorAll('.card')
      :this.cards = document.querySelectorAll(`.card[data-tab='${this.data}']`);
    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    this.tabElement.addEventListener("click", e => this.selectTab(e));
  }

  selectTab(){
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active-tab'))
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none')
  this.tabElement.classList.add('active-tab')
  this.cards.forEach(card => card.selectCard())
  }
}

class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement
  }
  selectCard(){
    this.cardElement.style.display = 'flex'
  }

}

let tabs = document.querySelectorAll('.tab').forEach( tab => new TabLink(tab));