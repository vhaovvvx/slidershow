const carouselSlide = document.querySelector(".trailer-siema__slider");
// console.log(carouselSlide);
const carouselVideos = document.querySelectorAll(".slider-videos video");
console.log(carouselVideos[0]);
const videos = document.getElementsByTagName("video");
//buttons
const prevBtn = document.querySelector("#trailer-prev__btn");
const nextBtn = document.querySelector("#trailer-next__btn");
//counter
let counter = 1;
const carouselSlide2 = document.querySelector(".trailer-container");

const widthhh = carouselSlide2.clientWidth / 2;
//slidershow
function next() {
  if (counter >= carouselVideos.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -widthhh * counter + "px)";
  counter++;
}

function prev() {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -widthhh * counter + "px)";
}

nextBtn.addEventListener("click", () => {
  next();
});
prevBtn.addEventListener("click", () => {
  prev();
});

setInterval(() => {
  // next();
}, 4 * 1000);

carouselSlide.addEventListener("transitionend", () => {
  if (carouselVideos[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselVideos.length - 2;
    carouselSlide.style.transform = "translateX(" + -widthhh * counter + "px)";
  }
});
carouselSlide.addEventListener("transitionend", () => {
  if (carouselVideos[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselVideos.length - counter;
    carouselSlide.style.transform = "translateX(" + -widthhh * counter + "px)";
  }
});

//dropdown nav

const itemsDrp = document.querySelectorAll(".flag img");
let i;
let timeDeplay = 0;
let a = 100;
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
      timeDeplay += 0.1;
      i.style.transition = "transform " + timeDeplay + "s ease-in-out";
      i.style.transform = "translateX(" + a + "px)";
    }
  }
};

//event target available now

//ActiveElement
var charactersApi = "https://608619ffd14a870017578a86.mockapi.io/persona/p5s5";

const imgElement = document.getElementsByClassName("character-img");
const charactersRender = document.getElementById("render-character");
const charactersRenderImg = document.getElementById("img-append");

let charactersHTML = "";

function getCharacter() {
  return fetch(charactersApi).then((res) => res.json());
}

function start() {
  clickHandler();
}
start();

function clickHandler() {
  getCharacter()
    .then((characters) => {
      characters[0].en.forEach((character) => {
        let joker = character.joker[0];
        charactersHTML += `
          <p class="character-info-heading">
            ${joker.name}
          <p>
          <p class="character-info"> ${joker.desc}
          </p>
          `;
        charactersRender.innerHTML = charactersHTML;

        //add class after click and render
        let charElements = [
          ...document.getElementsByClassName("character-persona"),
        ];
        charElements.forEach((charEl) => {
          charEl.addEventListener("click", function (e) {
            let current = document.getElementsByClassName("characterActive");
            current[0].className = current[0].className.replace(
              " characterActive",
              ""
            );
            this.classList += " characterActive";
            characters[0].en.forEach((char) => {
              let selectedCharacterName = charEl.getAttribute("name");
              let a = char[`${selectedCharacterName}`]; // luoi dat ten class qua
              let c = a[0];
              charactersRender.innerHTML = `
              <p class="character-info-heading">
                  ${c.name}
              <p>
              <p class="character-info"> ${c.desc}
              </p>
                `;
              charactersRenderImg.innerHTML = `
              <img src=${c.image}>
              `;
            });
          });
        });
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();
}

//purchar

function openSmallContent() {
  smallScreenElement.style.display = "block";
  largeScreenElement.style.display = "none";
  largeContent.style.display = "none";
  smallContent.style.display = "block";
}

function openLargeContent() {
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
      versionBtn[0].className += " VersionActive";
      openLargeContent();
    }
  });
}

const versionBtn = document.getElementsByClassName("versionButton");
for (i = 0; i < versionBtn.length; i++) {
  versionBtn[i].addEventListener("click", function (e) {
    e.preventDefault();
    let current = document.getElementsByClassName("VersionActive");
    current[0].className = current[0].className.replace(" VersionActive", "");
    this.className += " VersionActive";
    let digitalHidden = e.target.id == "digital";
    console.log(digitalHidden);
    if (digitalHidden === true) {
      openSmallContent();
    }
  });
}

const openAndCloseBuy = document.getElementById("launch-edition");

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
console.log(elementClickOverlay);
const steelbookEditionClickOverlay = document.getElementsByClassName(
  "click-buy__steelbook-edition"
);
const giftWithPurchaseClickOverlay = document.getElementsByClassName(
  "click-buy__gift-with-purchase"
);
const buttonNewsLetter = document.getElementsByClassName(
  "click-buy__newsletter"
);

elementClickOverlay.forEach((Elmt) => {
  Elmt.addEventListener("click", function (e) {
    e.preventDefault();
    let buyButtonLaunchEdition = e.target.id == "launch-edition-buy";
    let buyButtonSteelBookEdition = e.target.id == "steelbook-edition-buy";
    let buyButtonGiftWithPurchase = e.target.id == "gift-with-purchase";
    let buyButtonNewsLetter = e.target.id == "newsletter";
    let subscribeToTheNewsLetter = e.target.id == "newsletter2";
    console.log(subscribeToTheNewsLetter);

    if (buyButtonLaunchEdition) {
      overlay[0].style.display = "block";
      lauchEditionClickOverlay[0].style.display = "block";
    } else if (buyButtonSteelBookEdition) {
      overlay[0].style.display = "block";
      steelbookEditionClickOverlay[0].style.display = "block";
    } else if (buyButtonGiftWithPurchase) {
      overlay[0].style.display = "block";
      giftWithPurchaseClickOverlay[0].style.display = "block";
    } else if (buyButtonNewsLetter || subscribeToTheNewsLetter) {
      overlay[0].style.display = "block";
      buttonNewsLetter[0].style.display = "block";
    }
  });
});
const close = [...document.getElementsByClassName("close")];
close.forEach((closeElm) => {
  closeElm.addEventListener("click", function (e) {
    e.preventDefault();
    const closeBtn = e.target.className == "close";
    console.log(closeBtn);
    if (closeBtn) {
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
});
