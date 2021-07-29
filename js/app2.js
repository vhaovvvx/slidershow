const carouselSlide = document.querySelector(".trailer-siema__slider");
const carouselSlide2 = document.querySelector(".trailer-container");
const carouselVideos = document.querySelectorAll(".slider-videos video");
const availableSlide = document.querySelector(".valiable-siema__slider");
const availableSlide2 = document.querySelector(
  ".valiable-siema__slider-playtation"
);
const availableSlider = document.getElementsByClassName("ipad-container");
const availableSlider2 = document.getElementsByClassName("ipad-container-2");
//buttons
const prevBtn2 = document.querySelector("#available-prev__btn");
const nextBtn2 = document.querySelector("#available-next__btn");
const prevBtn3 = document.querySelector("#available-prev__btn2");
const nextBtn3 = document.querySelector("#available-next__btn2");
const overlay = document.querySelector(".overlay");

availableSlide.style.transform = "translateX(" + -100 + "%)";
availableSlide2.style.transform = "translateX(" + -100 + "%)";

//counter
var counter = 1;
var counter2 = 1;
var counter3 = 1;

const widthhhh = carouselSlide2.clientWidth / 2;
//slidershow

nextBtn3.addEventListener("click", () => {
  if (counter3 >= availableSlider2.length - 1) {
    return;
  }
  counter3++;
  availableSlide2.style.transition = "transform 0.4s ease-in-out";
  availableSlide2.style.transform = "translateX(" + -100 * counter3 + "%)";
});
prevBtn3.addEventListener("click", () => {
  if (counter3 <= 0) {
    return;
  }
  counter3--;
  availableSlide2.style.transition = "transform 0.4s ease-in-out";
  availableSlide2.style.transform = "translateX(" + -100 * counter3 + "%)";
});

availableSlide2.addEventListener("transitionend", () => {
  if (availableSlider2[counter3].id === "lastClone3") {
    availableSlide2.style.transition = "none";
    counter3 = availableSlider2.length - 2;
    availableSlide2.style.transform = "translateX(" + -100 * counter3 + "%)";
  }
});
availableSlide2.addEventListener("transitionend", () => {
  if (availableSlider2[counter3].id === "firstClone3") {
    availableSlide2.style.transition = "none";
    counter3 = availableSlider2.length - counter3;
    availableSlide2.style.transform = "translateX(" + -100 * counter3 + "%)";
  }
});
//small container slider available start
nextBtn2.addEventListener("click", () => {
  if (counter2 >= availableSlider.length - 1) {
    return;
  }
  counter2++;
  availableSlide.style.transition = "transform 0.4s ease-in-out";
  availableSlide.style.transform = "translateX(" + -100 * counter2 + "%)";
});
prevBtn2.addEventListener("click", () => {
  if (counter2 <= 0) {
    return;
  }
  counter2--;
  availableSlide.style.transition = "transform 0.4s ease-in-out";
  availableSlide.style.transform = "translateX(" + -100 * counter2 + "%)";
});

availableSlide.addEventListener("transitionend", () => {
  if (availableSlider[counter2].id === "lastClone2") {
    availableSlide.style.transition = "none";
    counter2 = availableSlider.length - 3;
    availableSlide.style.transform = "translateX(" + -100 * counter2 + "%)";
  }
});
availableSlide.addEventListener("transitionend", () => {
  if (availableSlider[counter2].id === "firstClone2") {
    availableSlide.style.transition = "none";
    counter2 = availableSlider.length - counter2;
    availableSlide.style.transform = "translateX(" + -100 * counter2 + "%)";
  }
});
//small container slider available end
carouselSlide.addEventListener("transitionend", () => {
  if (carouselVideos[counter2].id == "lastClone") {
    let widthhh = carouselSlide2.clientWidth;
    carouselSlide.style.transition = "none";
    counter2 = carouselVideos.length - 5;
    carouselSlide.style.transform =
      "translateX(" + -(widthhh - 20) * counter2 + "px)";
  }
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselVideos[counter].id === "firstClone") {
    let widthhh = carouselSlide2.clientWidth;
    if (widthhh > 700) {
      carouselSlide.style.transition = "none";
      counter = carouselVideos.length - counter;
      carouselSlide.style.transform =
        "translateX(" + (-(widthhh - 20) / 2) * counter + "px)";
    } else {
      carouselSlide.style.transition = "none";
      counter = carouselVideos.length - counter;
      carouselSlide.style.transform =
        "translateX(" + -(widthhh - 20) * counter + "px)";
    }
  }
});

//event target available now
//purchar
const containerPlaytation = document.getElementById("valiable-ipad-playtation");
function openSmallContent() {
  versionBtn[0].style.display = "none";
  valiableIpad.style.display = "block";
  containerPlaytation.style.display = "none";
  largeScreenElement.style.display = "none";
  largeContent.style.display = "none";
  smallContent.style.display = "block";
  smallScreenElement.style.display = "block";
}
const valiableIpad = document.getElementById("valiable-ipad");

function openLargeContent() {
  containerPlaytation.style.display = "block";
  valiableIpad.style.display = "none";
  versionBtn[0].style.display = "block";
  largeScreenElement.style.display = "block";
  largeContent.style.display = "block";
  smallContent.style.display = "none";
  smallScreenElement.style.display = "none";
}
const largeScreenElement = document.getElementById("largeSreenElement");
const largeContent = document.getElementById("largeContent");
const smallScreenElement = document.getElementById("smallSreenElement");
const smallContent = document.getElementById("smallContent");
const chooseBox = [...document.getElementsByClassName("choose-box")];

chooseBox.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    let current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
    let steamHiddenElement = e.target.id == "steam";
    if (steamHiddenElement === true) {
      openSmallContent();
    } else {
      let current = document.getElementsByClassName("VersionActive");
      current[0].className = current[0].className.replace(" VersionActive", "");
      versionBtn[2].className += " VersionActive";
      openLargeContent();
    }
  });
});

let current = document.getElementsByClassName("VersionActive");
const versionBtn = [...document.getElementsByClassName("versionButton")];
versionBtn.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    let current = document.getElementsByClassName("VersionActive");
    current[0].className = current[0].className.replace(" VersionActive", "");
    this.className += " VersionActive";
    let digitalHidden = e.target.id == "digital";
    let digitalHidden2 = e.target.id == "digital-small";
    if (digitalHidden || digitalHidden2) {
      openSmallContent();
    }
  });
});
const openAndCloseBuy = document.getElementById("launch-edition");
const nav = document.getElementById("nav");
const hiddenNavClick = document.querySelector(".country-navigation-wrapper");
const hiddenNavBuy = document.querySelector(".nav-buy");
const lauchEditionClickOverlay = document.querySelector(
  ".click-buy__launch-edition"
);
const elementClickOverlay = [
  ...document.getElementsByClassName("buynowButton"),
];
const steelbookEditionClickOverlay = document.querySelector(
  ".click-buy__steelbook-edition"
);
const giftWithPurchaseClickOverlay = document.querySelector(
  ".click-buy__gift-with-purchase"
);
const buttonNewsLetter = document.querySelector(".click-buy__newsletter");

const logoBtn = document.getElementById("logo-bar");
const topdownMenuBtn = document.querySelector(".topdown-menu");
elementClickOverlay.forEach((Elmt) => {
  Elmt.addEventListener("click", function (e) {
    e.preventDefault();
    let buyButtonLaunchEdition = e.target.id == "launch-edition-buy";
    let buyButtonSteelBookEdition = e.target.id == "steelbook-edition-buy";
    let buyButtonGiftWithPurchase = e.target.id == "gift-with-purchase";
    let buyButtonLaunchEdition2 = e.target.id == "launch-edition-buy2";
    let buyButtonSteelBookEdition2 = e.target.id == "steelbook-edition-buy2";
    let buyButtonGiftWithPurchase2 = e.target.id == "gift-with-purchase2";
    let buyButtonNewsLetter = e.target.id == "newsletter";
    let subscribeToTheNewsLetter = e.target.id == "newsletter2";
    let logoBar = e.target.id == "btn__logo-bar";
    let logoBar2 = e.target.id == "logo-bar";
    if (buyButtonLaunchEdition || buyButtonLaunchEdition2) {
      open();
      lauchEditionClickOverlay.style.display = "block";
    } else if (buyButtonSteelBookEdition || buyButtonSteelBookEdition2) {
      open();
      steelbookEditionClickOverlay.style.display = "block";
    } else if (buyButtonGiftWithPurchase || buyButtonGiftWithPurchase2) {
      open();
      giftWithPurchaseClickOverlay.style.display = "block";
    } else if (buyButtonNewsLetter || subscribeToTheNewsLetter) {
      open();
      buttonNewsLetter.style.display = "block";
    } else if (logoBar2) {
      open();
      topdownMenuBtn.style.transition = "transform 0.5s ease-in-out";
      topdownMenuBtn.style.transform = "translateY(0%)";
      topdownMenuBtn.style.display = "block";
    }
  });
});

function open() {
  overlay.classList.add("openn");
}

const close = [...document.getElementsByClassName("close-element")];
close.forEach((closeElm) => {
  closeElm.addEventListener("click", function (e) {
    e.preventDefault();
    const closeBtn = e.target.classList.contains("close-element");
    if (closeBtn) {
     overlay.classList.remove("openn");
      topdownMenuBtn.style.removeProperty("transform");
      lauchEditionClickOverlay.style.display = "none";
      steelbookEditionClickOverlay.style.display = "none";
      giftWithPurchaseClickOverlay.style.display = "none";
      buttonNewsLetter.style.display = "none";
    }
  });
});
overlay.addEventListener("click", function (e) {
  if (e.target.classList.contains("openn")) {
    overlay.classList.remove("openn");
  }
  lauchEditionClickOverlay.style.display = "none";
  steelbookEditionClickOverlay.style.display = "none";
  giftWithPurchaseClickOverlay.style.display = "none";
  buttonNewsLetter.style.display = "none";
  topdownMenuBtn.style.transform = "translateY(-200%)";
});
