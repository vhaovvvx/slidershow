const carouselSlide = document.querySelector(".trailer-siema__slider");
const carouselVideos = document.querySelectorAll(".slider-videos video");
const videos = document.getElementsByTagName("video");
videos.autoplay = true;
//buttons
const prevBtn = document.querySelector("#trailer-prev__btn");
const nextBtn = document.querySelector("#trailer-next__btn");
//counter
let counter = 1;
const changImg = 13.5;
//Button Listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselVideos.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -changImg * counter + "%)";
  counter++;
  console.log(counter);
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  console.log(counter);
  carouselSlide.style.transform = "translateX(" + -changImg * counter + "%)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselVideos[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselVideos.length - 2;
    carouselSlide.style.transform = "translateX(" + -changImg * counter + "%)";
  }
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselVideos[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselVideos.length - counter;
    carouselSlide.style.transform = "translateX(" + -changImg * counter + "%)";
  }
});

const itemsDrp = document.querySelectorAll(".flag img");
let i;
let timeDeplay = 0;
let a = 100;

let btnDrpIndex = itemsDrp.length - 1;
clickHandlerNav = () => {
  const btnDrp = document.getElementById("myDropdown").classList.toggle("show");
  if (btnDrp == true) {
    timeDeplay = 0;
    for (i of itemsDrp) {
      timeDeplay += 0.1;
      i.style.transition = "transform " + timeDeplay + "s ease-in-out";
      i.style.transform = "translateX(0px)";
    }
  } else {
    timeDeplay = 0;
    for (i of itemsDrp) {
      console.log(i);
      timeDeplay += 0.1;
      i.style.transition = "transform " + timeDeplay + "s ease-in-out";
      i.style.transform = "translateX(" + a + "px)";
    }
  }
};
