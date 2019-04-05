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
        // this.imgList[this.index].style.display = 'none' ;
        this.imgList.forEach(img => img.style.opactity = '0')
        TweenMax.to(this.imgList[this.index] , 2, {x: -1500} )
        TweenMax.to(this.imgList[this.index] , 0, { delay: 1.2, display: 'none', x: 0} )
        this.index === 0
            ? this.index = this.imgList.length-1
            : this.index--
        TweenMax.to(this.imgList[this.index] , 0, { delay: 1.2, display: 'block', opactity :1} )
    }
    
    cycleRight () {
        // this.imgList[this.index].style.display = "none";
        TweenMax.to(this.imgList[this.index] , 2, {x: 1500} )
        TweenMax.to(this.imgList[this.index] , 0, { delay: 1, display: 'none', x: 0} )
        this.index == this.imgList.length - 1
            ? this.index = 0
            : this.index ++;
        TweenMax.to(this.imgList[this.index] , 0, { delay: 1, display: 'block', opactity :1} )
    }
    
  }
   
  let carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));
