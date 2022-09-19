const carouselSlide = document.querySelector(".current-work-image-slide")
const carouselSlideLeft = document.querySelector(".other-work-image-slide-left")
const carouselSlideRight = document.querySelector(".other-work-image-slide-right")
const carouselSlideText = document.querySelector(".current-work-podtext-parent")

let counter = 0;
let size;
let sizeOther;
checkSize();
counter = 0;

function checkSize() {
    if ((window.innerHeight > 793 || window.innerHeight <= 662) && window.innerWidth > 1351) {
        if (size != 685) {
            counter = 3;
        }
        size = 685;
        sizeOther = 450;
    } else if (((window.innerHeight <= 793) && (window.innerHeight > 662)) || (window.innerWidth <= 1351 && window.innerWidth > 763)) {
        if (size != 550) {
            counter = 3;
        }
        size = 550;
        sizeOther = 300;
    } else if (window.innerWidth <= 763) {
        size = 390;
        console.log(size)
    }
}

function slide() {
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    carouselSlideText.style.transition = "transform 0.4s ease-in-out"
    counter++
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    carouselSlideText.style.transform = "translateX(" + (-size * counter) + "px)";
}
function slideLeft() {
    carouselSlideLeft.style.transition = "transform 0.4s ease-in-out"
    carouselSlideLeft.style.transform = "translateX(" + (-sizeOther * counter) + "px)";
}

function slideRight() {
    carouselSlideRight.style.transition = "transform 0.4s ease-in-out"
    carouselSlideRight.style.transform = "translateX(" + (-sizeOther * counter) + "px)";
}


function main() {
    slide();
    slideLeft();
    slideRight();

    checkSize();
    
    if (counter === 3) {
       setTimeout(() => {
        carouselSlide.style.transition = "none";
        carouselSlideLeft.style.transition = "none";
        carouselSlideRight.style.transition = "none";
        carouselSlideText.style.transition = "none";
        counter = 0;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
        carouselSlideLeft.style.transform = "translateX(" + (-sizeOther * counter) + "px)";
        carouselSlideRight.style.transform = "translateX(" + (-sizeOther * counter) + "px)";
        carouselSlideText.style.transform = "translateX(" + (-size * counter) + "px)";
       }, 400);
    }
}

setInterval(main, 5000);