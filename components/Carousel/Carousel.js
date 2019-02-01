class Carousel {
    constructor (carousel) {
        this.carousel = carousel;
        this.leftBtn = carousel.querySelector(".left-button");
        this.rightBtn = carousel.querySelector(".right-button");
        this.imgList = carousel.querySelectorAll("img");
        this.index = 0
        this.imgList[this.index].style.display = 'block'
        this.leftBtn.addEventListener("click", () => this.cycleLeft());
        this.rightBtn.addEventListener("click", () => this.cycleRight());
      
    }
    
    cycleLeft () {
        this.imgList.forEach(img => img.style.display = "none")
        this.index === 0
        ? this.index = this.imgList.length-1
        : this.index--
        this.imgList[this.index].style.display = "block";
        TweenMax.to(imgList[this.index] , 2, {x: 800} )
        }
  
    cycleRight () {
        this.imgList[this.index].style.display = "none";
        this.index == this.imgList.length - 1
            ? this.index = 0
            : this.index ++;
        this.imgList[this.index].style.display = "block";
    }
    
  }
   
  let carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));
