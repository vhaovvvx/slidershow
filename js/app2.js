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
const prevBtn = document.querySelector("#trailer-prev__btn");
const nextBtn = document.querySelector("#trailer-next__btn");
const prevBtn2 = document.querySelector("#available-prev__btn");
const nextBtn2 = document.querySelector("#available-next__btn");
const prevBtn3 = document.querySelector("#available-prev__btn2");
const nextBtn3 = document.querySelector("#available-next__btn2");

availableSlide.style.transform = "translateX(" + -100 + "%)";
availableSlide2.style.transform = "translateX(" + -100 + "%)";

//counter
var counter = 1;
var counter2 = 1;
var counter3 = 1;

const widthhhh = carouselSlide2.clientWidth / 2;
//slidershow
nextBtn.addEventListener("click", () => {
  let widthhh = carouselSlide2.clientWidth;
  if (counter >= carouselVideos.length - 1) {
    return;
  } else if (widthhh > 700) {
    let widthhh = carouselSlide2.clientWidth;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform =
      "translateX(" + -(widthhh / 2) * counter + "px)";
    counter++;
  } else {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform =
      "translateX(" + -(widthhh - 10) * counter + "px)";
    counter++;
  }
});

prevBtn.addEventListener("click", () => {
  let widthhh = carouselSlide2.clientWidth;
  if (counter <= 0) {
    return;
  } else if (widthhh > 700) {
    let widthhh = carouselSlide2.clientWidth / 2;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + -widthhh * counter + "px)";
  } else {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform =
      "translateX(" + -(widthhh - 20) * counter + "px)";
  }
});

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
  smallScreenElement.style.display = "block";
  largeScreenElement.style.display = "none";
  largeContent.style.display = "none";
  smallContent.style.display = "block";
}
const valiableIpad = document.getElementById("valiable-ipad");

function openLargeContent() {
  containerPlaytation.style.display = "block";
  valiableIpad.style.display = "none";
  versionBtn[0].style.display = "block";
  smallScreenElement.style.display = "none";
  largeScreenElement.style.display = "block";
  largeContent.style.display = "block";
  smallContent.style.display = "none";
}
const largeScreenElement = document.getElementById("largeSreenElement");
const largeContent = document.getElementById("largeContent");
const smallScreenElement = document.getElementById("smallSreenElement");
const smallContent = document.getElementById("smallContent");
const chooseBox = document.getElementsByClassName("choose-box");

for (i = 0; i < chooseBox.length; i++) {
  chooseBox[i].addEventListener("click", function (e) {
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
}
let current = document.getElementsByClassName("VersionActive");
const versionBtn = document.getElementsByClassName("versionButton");
for (i = 0; i < versionBtn.length; i++) {
  versionBtn[i].addEventListener("click", function (e) {
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
}
const openAndCloseBuy = document.getElementById("launch-edition");

// scroll event
window.onscroll = function () {
  scrollFunction();
};
const nav = document.getElementById("nav");
const hiddenNavClick = document.getElementsByClassName(
  "country-navigation-wrapper"
);
const hiddenNavBuy = document.getElementsByClassName("nav-buy");

function scrollFunction() {
  if (document.documentElement.scrollTop > 700) {
    nav.style.position = "fixed";
    nav.style.width = "100%";
    nav.style.zIndex = "999";
    nav.style.top = "0";
    nav.style.backgroundColor = "black";
    hiddenNavClick[0].style.display = "none";
    hiddenNavBuy[0].style.visibility = "initial";
  } else {
    nav.style.top = "0px";
    nav.style.position = "initial";
    nav.style.width = "100%";
    nav.style.zIndex = "999";
    nav.style.backgroundColor = "transparent";
    hiddenNavClick[0].style.display = "block";
    hiddenNavBuy[0].style.visibility = "hidden";
  }
}
const overlay = document.getElementsByClassName("overlay");
const lauchEditionClickOverlay = document.getElementsByClassName(
  "click-buy__launch-edition"
);
const elementClickOverlay = [
  ...document.getElementsByClassName("buynowButton"),
];
const steelbookEditionClickOverlay = document.getElementsByClassName(
  "click-buy__steelbook-edition"
);
const giftWithPurchaseClickOverlay = document.getElementsByClassName(
  "click-buy__gift-with-purchase"
);
const buttonNewsLetter = document.getElementsByClassName(
  "click-buy__newsletter"
);
const logoBtn = document.getElementById("logo-bar");
const topdownMenuBtn = document.getElementsByClassName("topdown-menu");
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
      overlay[0].style.display = "block";
      lauchEditionClickOverlay[0].style.display = "block";
    } else if (buyButtonSteelBookEdition || buyButtonSteelBookEdition2) {
      overlay[0].style.display = "block";
      steelbookEditionClickOverlay[0].style.display = "block";
    } else if (buyButtonGiftWithPurchase || buyButtonGiftWithPurchase2) {
      overlay[0].style.display = "block";
      giftWithPurchaseClickOverlay[0].style.display = "block";
    } else if (buyButtonNewsLetter || subscribeToTheNewsLetter) {
      overlay[0].style.display = "block";
      buttonNewsLetter[0].style.display = "block";
    } else if (logoBar2) {
      overlay[0].style.display = "block";
      topdownMenuBtn[0].style.transition = "transform 0.5s ease-in-out";
      topdownMenuBtn[0].style.transform = "translateY(0%)";
      topdownMenuBtn[0].style.display = "block";
    }
  });
});
const close = [...document.getElementsByClassName("close-element")];
close.forEach((closeElm) => {
  closeElm.addEventListener("click", function (e) {
    e.preventDefault();
    const closeBtn = e.target.classList.contains("close-element");
    if (closeBtn) {
      topdownMenuBtn[0].style.removeProperty("transform");
      overlay[0].style.display = "none";
      lauchEditionClickOverlay[0].style.display = "none";
      steelbookEditionClickOverlay[0].style.display = "none";
      giftWithPurchaseClickOverlay[0].style.display = "none";
      buttonNewsLetter[0].style.display = "none";
    }
  });
});
overlay[0].addEventListener("click", function () {
  overlay[0].style.display = "none";
  lauchEditionClickOverlay[0].style.display = "none";
  steelbookEditionClickOverlay[0].style.display = "none";
  giftWithPurchaseClickOverlay[0].style.display = "none";
  buttonNewsLetter[0].style.display = "none";
  topdownMenuBtn[0].style.transform = "translateY(-200%)";
});
