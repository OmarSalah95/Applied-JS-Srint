class TabLink {
  constructor(tabElement){
    
  }

  selectTab(){

  }
}

class TabCard {
  constructor(cardElement){
    
  }
  selectCard(){
    
  }

}

let tabs = document.querySelectorAll('.tab').forEach( tab => new TabLink(tab));