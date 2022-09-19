const carouselSlide = document.querySelector(".current-work-image-slide")
const carouselSlideLeft = document.querySelector(".other-work-image-slide-left")
const carouselSlideRight = document.querySelector(".other-work-image-slide-right")
const carouselSlideText = document.querySelector(".current-work-podtext-parent")

whatCarousel = document.querySelector(".what-carousel")
let counter = 0;
let size;
let sizeOther;
checkSize();
counter = 0;
console.log("Does it even log?");
console.log(getComputedStyle(whatCarousel).width);

function checkSize() {
    if (String(getComputedStyle(whatCarousel).width) == "1px") {
        if (size != 685) {
            counter = 3;
        }
        size = 685;
        sizeOther = 450;
        console.log("Nothing seems to work here2");
    } else if (String(getComputedStyle(whatCarousel).width) == "2px") {
        if (size != 550) {
            counter = 3;
        }
        size = 550;
        sizeOther = 300;
        console.log("Nothing seems to work here1");
    } else if (String(getComputedStyle(whatCarousel).width) == "3px") {
        if (size != window.innerWidth) {
            counter = 3;
        }
        size = window.innerWidth;
        console.log(size);
        console.log("Something seems to work here");
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