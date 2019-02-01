class Carousel {
    constructor (carousel) {
      this.carousel = carousel;
      this.leftBtn = carousel.querySelector(".left-button");
      this.rightBtn = carousel.querySelector(".right-button");
      this.imgList = document.querySelectorAll(".carousel img");
      console.log(imgList)
    }
    cycleLeft () {
 
  
    }
  
    cycleRight () {
      
    }
    
  }
   
  let carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));