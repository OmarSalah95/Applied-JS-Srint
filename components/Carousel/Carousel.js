class Carousel {
    constructor (carousel) {
      this.carousel = carousel;
      this.leftBtn = carousel.querySelector(".left-button");
      this.rightBtn = carousel.querySelector(".right-button");
      this.imgList = carousel.querySelectorAll("img");
      this.leftBtn.addEventListener("click", () => this.cycleLeft());
      this.rightBtn.addEventListener("click", () => this.cycleRight());
      
    }
    cycleLeft () {
 
  
    }
  
    cycleRight () {
      
    }
    
  }
   
  let carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));