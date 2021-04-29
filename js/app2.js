const carouselSlide = document.querySelector(".trailer-siema__slider");
const carouselVideos = document.querySelectorAll(".slider-videos video");
console.log(carouselVideos);
const videos = document.getElementsByTagName("video");
//buttons
const prevBtn = document.querySelector("#trailer-prev__btn");
const nextBtn = document.querySelector("#trailer-next__btn");
//counter
let counter = 1;
const changImg = 13.4;
//Button Listeners
function next() {
  if (counter >= carouselVideos.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -changImg * counter + "%)";
  counter++;
}

function prev() {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -changImg * counter + "%)";
}

nextBtn.addEventListener("click", () => {
  next();
});
prevBtn.addEventListener("click", () => {
  prev();
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
// setInterval(() => {
//   next();
// }, 1 * 2000);

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
      timeDeplay += 0.1;
      i.style.transition = "transform " + timeDeplay + "s ease-in-out";
      i.style.transform = "translateX(" + a + "px)";
    }
  }
};

//ActiveElement

const imgElement = document.getElementsByClassName("character-img");
var charactersApi = "http://localhost:3000/en";

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
      characters.forEach((character) => {
        let joker = character.joker[0];
        charactersHTML += `
      <p class="character-info-heading">
      ${joker.name}
      <p>
      <p class="character-info"> ${joker.desc}
      </p>
      `;
        document.getElementById("render-character").innerHTML = charactersHTML;
        let charElements = [
          ...document.getElementsByClassName("character-persona"),
        ];
        charElements.forEach((charEl) => {
          charEl.addEventListener("click", () => {
            characters.forEach((char) => {
              let selectedCharacterId = charEl.getAttribute("name");
              let a = char[`${selectedCharacterId}`]; // luoi dat ten class qua
              let c = a[0];
              document.getElementById("render-character").innerHTML = `
              <p class="character-info-heading">
                  ${c.name}
              <p>
              <p class="character-info"> ${c.desc}
              </p>
                `;
              let node = document.createElement("img");
              node.className = "img-appendd";
              document.getElementById("img-append").appendChild(node);

              node.src = `${c.image}`;
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
