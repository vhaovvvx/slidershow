let navBtn = document.querySelectorAll(".navBtn li");
let newStory = "";
let fightStyle = "";
let harnessFullStreng = "";
let buttonAvailable = [...document.getElementsByClassName("versionTitle")];
let retail = [
  ...document.querySelectorAll(
    ".versionButtonsContainer .versionButton.retailText"
  ),
];
let digital = [
  ...document.querySelectorAll(
    ".versionButtonsContainer .versionButton.digitalText"
  ),
];
let buynow = [...document.querySelectorAll(".gameCoverRetail .buynowButton")];
let headingGameCoverRetailEdition = [
  ...document.querySelectorAll(".gameCoverRetail .launch-header.edition"),
];
let headingGameCoverRetailSteelBook = [
  ...document.querySelectorAll(".gameCoverRetail .launch-header.steelbook"),
];
let headingGameCoverRetailGWP = [
  ...document.querySelectorAll(".gameCoverRetail .launch-header.gwp"),
];

let imgGameCoverRetailLaunchToHide = [
  ...document.querySelectorAll(".gameCoverRetail.launchToHide img"),
];

let imgGameCoverRetailSteelToHide = [
  ...document.querySelectorAll(".gameCoverRetail.steelToHide img"),
];
let imgGameCoverRetailGWP = [
  ...document.querySelectorAll(".gameCoverRetail.gwpToHide img"),
];

let imgLaunchDeluxe = [
  ...document.querySelectorAll(".gameCoverRetail.launchToHide.deluxe img"),
];
let imgLaunchstandard = [
  ...document.querySelectorAll(".gameCoverRetail.launchToHide.standard img"),
];

let headerDeluxe = [
  ...document.querySelectorAll(
    ".gameCoverRetail.launchToHide.deluxe .launch-header"
  ),
];
let headerStandard = [
  ...document.querySelectorAll(
    ".gameCoverRetail.launchToHide.standard .launch-header"
  ),
];

var radr;
fetch("https://608619ffd14a870017578a86.mockapi.io/persona//p5s")
  .then((response) => response.json())
  .then((json) => {
    var radr = JSON.stringify(json);
    var aaaa = JSON.parse(radr);
    let navLink = aaaa[0].header.navbar;
    let containerLink = aaaa[0].header.container;
    //header
    navBtn[0].innerHTML = navLink.link.media;
    navBtn[1].innerHTML = navLink.link.features;
    navBtn[2].innerHTML = navLink.link.characters;
    document.querySelector(".nav-logo img").src = `${navLink.logo}`;
    document.querySelector(".logo-center img").src = `${containerLink.logo}`;
    document.querySelector(".img-esrb img").src = `${containerLink.esrb}`;
    document.querySelector(".text-bottom").innerHTML = containerLink.heading;
    document.querySelector(".buy-now").innerHTML = containerLink.buynow;
    document.querySelector(".watch-trailer").innerHTML =
      containerLink.watchtrailer.text;
    document.querySelector(
      ".watch-trailer-link"
    ).href = `${containerLink.watchtrailer.link}`;
    document.querySelector(
      ".hero-video"
    ).innerHTML += `<source src="./img/video/bgVideo.mp4" muted  />`;
    document.querySelector(
      ".hero-video img"
    ).src = `${containerLink.imagebgvideo}`;
    document.querySelector(
      "#click-dropdown img"
    ).src = `${containerLink.flagUs}`;

    //media
    let media = aaaa[0].media;
    document.querySelector(".media-title").innerHTML = media.heading;
    document.querySelector(".media-main__text").innerHTML = media.textHeading;

    //features
    let features = aaaa[0].features;
    console.log(features);
    document.querySelector(".features-heading").innerHTML = features.heading;
    document.querySelector(".description-text").innerHTML =
      features.textHeading;
    document.querySelector(
      ".features-content.row img"
    ).src = `${features.imageHeading}`;

    newStory += `
       <h4>${features.newStory.heading}</h4>
       <p class="description-text-2">${features.newStory.content}</p>
       ${features.newStory.img}
    `;
    fightStyle += `
       <h4>${features.fightStyle.heading}</h4>
       <p class="description-text-2">${features.fightStyle.content}</p>
       ${features.fightStyle.img}
    `;
    harnessFullStreng += `
       <h4>${features.harnessFullStreng.heading}</h4>
       <p class="description-text-2">${features.harnessFullStreng.content}</p>
       ${features.harnessFullStreng.img}
    `;

    document.querySelector(".render-features.content1").innerHTML += newStory;
    document.querySelector(".render-features.content2").innerHTML += fightStyle;
    document.querySelector(".render-features.content3").innerHTML +=
      harnessFullStreng;

    //available now
    let availableRender = aaaa[0].available;
    document.querySelector(".available-heading").innerHTML =
      availableRender.heading;
    document.querySelector(".choose-flatform .heading-flatform").innerHTML =
      availableRender.platforms;
    document.querySelector(".choose-box.nintendo").innerHTML =
      availableRender.nitendo;

    document.querySelector(".choose-box.ps4").innerHTML = availableRender.ps4;
    document.querySelector(".choose-box.steam").innerHTML =
      availableRender.steam;

    buttonAvailable.forEach((element) => {
      element.textContent = availableRender.version;
    });
    document.querySelector(".editionTitle").innerHTML = availableRender.edition;
    retail.forEach((element) => {
      element.textContent = availableRender.retail;
    });
    digital.forEach((element) => {
      element.textContent = availableRender.digital;
    });
    buynow.forEach((element) => {
      element.textContent = availableRender.buynow;
    });
    headingGameCoverRetailEdition.forEach((element) => {
      element.textContent = availableRender.launch;
    });
    headingGameCoverRetailSteelBook.forEach((element) => {
      element.textContent = availableRender.steel;
    });
    headingGameCoverRetailGWP.forEach((element) => {
      element.textContent = availableRender.gwp;
    });
    imgGameCoverRetailLaunchToHide.forEach((element) => {
      element.src = `${availableRender.purchase.launchEdition}`;
    });
    imgGameCoverRetailSteelToHide.forEach((element) => {
      element.src = `${availableRender.purchase.launchSteelBook}`;
    });
    imgGameCoverRetailGWP.forEach((element) => {
      element.src = `${availableRender.purchase.launchgwp}`;
    });

    imgLaunchDeluxe.forEach((element) => {
      element.src = `${availableRender.purchase.launchDeluxe}`;
    });
    imgLaunchstandard.forEach((element) => {
      element.src = `${availableRender.purchase.launchStandard}`;
    });
    headerStandard.forEach((element) => {
      element.textContent = availableRender.standard;
    });
    headerDeluxe.forEach((element) => {
      element.textContent = availableRender.deluxe;
    });
    //footer
    let footerRender = aaaa[0].footer;
    let logoNav = footerRender.footerNav.imgLogo;
    document.querySelector(".nav-items.facebook").innerHTML =
      footerRender.footerNav.facebook;
    document.querySelector(".nav-items.twitter").innerHTML =
      footerRender.footerNav.twitter;
    document.querySelector(".nav-items.youtube").innerHTML =
      footerRender.footerNav.youtube;
    document.querySelector(".nav-items.twitch").innerHTML =
      footerRender.footerNav.twitch;
    document.querySelector(".nav-items.instagram").innerHTML =
      footerRender.footerNav.instagram;
    document.querySelector(".atlus-logo").src = `${logoNav.atlus}`;
    document.querySelector(".p-studio").src = `${logoNav.pStudio}`;
    document.querySelector(
      ".nintendo-switch"
    ).src = `${logoNav.platformSwitch}`;
    document.querySelector(".logo-group .ps4").src = `${logoNav.ps4}`;
    document.querySelector(".logo-group .steam").src = `${logoNav.steam}`;
    document.querySelector(".esrb-3").innerHTML += logoNav.esrb;
    document.querySelector(".esrb-2").src = `${logoNav.esrb2}`;
    document.querySelector(".footer-copy").innerHTML += footerRender.textCopy;
    document.querySelector(".policy-group").innerHTML +=
      footerRender.policyGroup;
  });

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
