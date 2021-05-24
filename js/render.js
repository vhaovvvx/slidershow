const $$ = document.querySelector.bind(document);

const $$$ = document.querySelectorAll.bind(document);

const navBtn = $$$(".navBtn li");
const unDisabledBtn = document.querySelector(".subscribe-to-letter__text");

let count;
let image = "";
let newString = "";
let newString2 = "";

let newFlag = "";
let newStory = "";
let fightStyle = "";
let harnessFullStreng = "";
const buttonAvailable = [...document.getElementsByClassName("versionTitle")];
const retail = [...$$$(".versionButtonsContainer .versionButton.retailText")];
const digital = [...$$$(".versionButtonsContainer .versionButton.digitalText")];
const buynow = [...$$$(".gameCoverRetail .buynowButton")];
const headingGameCoverRetailEdition = [
  ...$$$(".gameCoverRetail .launch-header.edition"),
];
const headingGameCoverRetailSteelBook = [
  ...$$$(".gameCoverRetail .launch-header.steelbook"),
];
const headingGameCoverRetailGWP = [
  ...$$$(".gameCoverRetail .launch-header.gwp"),
];

const imgGameCoverRetailLaunchToHide = [
  ...$$$(".gameCoverRetail.launchToHide img"),
];

const imgGameCoverRetailSteelToHide = [
  ...$$$(".gameCoverRetail.steelToHide img"),
];
const imgGameCoverRetailGWP = [...$$$(".gameCoverRetail.gwpToHide img")];

const imgLaunchDeluxe = [...$$$(".gameCoverRetail.launchToHide.deluxe img")];
const imgLaunchstandard = [
  ...$$$(".gameCoverRetail.launchToHide.standard img"),
];

const headerDeluxe = [
  ...$$$(".gameCoverRetail.launchToHide.deluxe .launch-header"),
];
const headerStandard = [
  ...$$$(".gameCoverRetail.launchToHide.standard .launch-header"),
];
var jsonObject = {};

var radr;
function callApi() {
  return fetch("https://608619ffd14a870017578a86.mockapi.io/persona//p5s").then(
    (response) => response.json()
  );
}

function render() {
  callApi().then((json) => {
    var radr = JSON.stringify(json);
    var aaaa = JSON.parse(radr);
    const navLink = aaaa[0].header.navbar;
    const containerLink = aaaa[0].header.container;
    //header
    navBtn[0].innerHTML = navLink.link.media;
    navBtn[1].innerHTML = navLink.link.features;
    navBtn[2].innerHTML = navLink.link.characters;
    $$(".nav-logo img").src = `${navLink.logo}`;
    $$(".logo-center img").src = `${containerLink.logo}`;
    $$(".img-esrb img").src = `${containerLink.esrb}`;
    $$(".nav-country-logo__img").src = `${navLink.flagUs}`;
    json.forEach((flags) => {
      let flagss = navLink.flag;
      for (let flag in flagss) {
        newFlag += `
        <div class="flag" id="${flag}">
          <a href="#">
            <img src=${flagss[flag]} data="${flag}" name="${flag}" />
          </a>
       </div> `;
      }
      document.getElementById("myDropdown").innerHTML += newFlag;
      clickDropdownItems();
    });

    $$(".text-bottom").innerHTML = containerLink.heading;
    $$(".buy-now").innerHTML = containerLink.buynow;
    $$(".watch-trailer").innerHTML = containerLink.watchtrailer.text;
    $$(".watch-trailer-link").href = `${containerLink.watchtrailer.link}`;
    $$(
      ".hero-video"
    ).innerHTML += `<source src="./img/video/bgVideo.mp4" muted  />`;
    $$(".hero-video img").src = `${containerLink.imagebgvideo}`;
    $$("#click-dropdown img").src = `${containerLink.flagUs}`;

    //media
    const media = aaaa[0].media;
    $$(".media-title").innerHTML = media.heading;
    $$(".media-main__text").innerHTML = media.textHeading;

    //features
    const features = aaaa[0].features;
    $$(".features-heading").innerHTML = features.heading;
    $$(".description-text").innerHTML = features.textHeading;
    $$(".features-content.row img").src = `${features.imageHeading}`;

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

    $$(".render-features.content1").innerHTML += newStory;
    $$(".render-features.content2").innerHTML += fightStyle;
    $$(".render-features.content3").innerHTML += harnessFullStreng;

    //available now
    const availableRender = aaaa[0].available;
    $$(".available-heading").innerHTML = availableRender.heading;
    $$(".choose-flatform .heading-flatform").innerHTML =
      availableRender.platforms;
    $$(".choose-box.nintendo").innerHTML = availableRender.nitendo;

    $$(".choose-box.ps4").innerHTML = availableRender.ps4;
    $$(".choose-box.steam").innerHTML = availableRender.steam;

    buttonAvailable.forEach((element) => {
      element.textContent = availableRender.version;
    });
    $$(".editionTitle").innerHTML = availableRender.edition;
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
    const footerRender = aaaa[0].footer;
    const logoNav = footerRender.footerNav.imgLogo;
    $$(".connect-with-atlus .connect").innerHTML = footerRender.connectWith;
    $$(".nav-items.facebook").innerHTML = footerRender.footerNav.facebook;
    $$(".nav-items.twitter").innerHTML = footerRender.footerNav.twitter;
    $$(".nav-items.youtube").innerHTML = footerRender.footerNav.youtube;
    $$(".nav-items.twitch").innerHTML = footerRender.footerNav.twitch;
    $$(".nav-items.instagram").innerHTML = footerRender.footerNav.instagram;
    $$(".atlus-logo").src = `${logoNav.atlus}`;
    $$(".p-studio").src = `${logoNav.pStudio}`;
    $$(".nintendo-switch").src = `${logoNav.platformSwitch}`;
    $$(".logo-group .ps4").src = `${logoNav.ps4}`;
    $$(".logo-group .steam").src = `${logoNav.steam}`;
    $$(".esrb-3").innerHTML += logoNav.esrb;
    $$(".esrb-2").src = `${logoNav.esrb2}`;
    $$(".footer-copy").innerHTML += footerRender.textCopy;
    $$(".policy-group").innerHTML += footerRender.policyGroup;
  });
}
var charactersApi = "https://608619ffd14a870017578a86.mockapi.io/persona/p5s5";
const imgElement = document.getElementsByClassName("character-img");
const charactersRender = document.getElementById("render-character");
const charactersRenderImg = document.getElementById("img-append");
const characterRenderLi = document.getElementById("activeElements");
let charactersHTML = "";
function getCharacter() {
  return fetch(charactersApi).then((res) => res.json());
}
function start() {
  clickHandler();
  render();
}
start();
function clickHandler() {
  getCharacter()
    .then((characters) => {
      characters[0].en.forEach((character) => {
        let liCharacters = character;
        delete liCharacters.title;
        for (let abcc in liCharacters) {
          let newCharacters = "";
          newCharacters += `<li
            class="character-persona"
            id="${abcc}"
            name="${abcc}"
            value="${abcc}"
            data="${abcc}"
          >
            <img src="${liCharacters[abcc][0].thumbimage}"/>
          </li>`;
          characterRenderLi.innerHTML += newCharacters;
        }
        document.getElementById("joker").classList += " characterActive";
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

// validator
function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  let formElement = document.querySelector(options.form);

  let selectorRules = {};

  function Validate(inputElement, rule) {
    let errorMessage;
    let errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);
    // lấy ra các rules của selector
    let rules = selectorRules[rule.selector];

    //lặp qua từng rule & kiểm tra
    //nếu có lỗi thì dừng việc kiểm tra
    for (let i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.classList.remove("invalid");
    }
    return !errorMessage;
  }

  if (formElement) {
    //onsubmit
    formElement.onsubmit = function (e) {
      e.preventDefault();
      let isFormValid = true;
      // lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        let inputElement = formElement.querySelector(rule.selector);

        let isValid = Validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        //Trường hợp submit với javascript
        if (typeof options.onSubmit === "function") {
          let enableInputs = formElement.querySelectorAll(
            "[name]:not([disabled])"
          );
          let formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            values[input.name] = input.value;
            return values;
          },
          {});
          options.onSubmit(formValues);
        }
        //submit với hành vi mặc định
      } else {
        console.log("có lỗi");
        // formElement.submit();
      }
    };
    //Lặp qua mỗi rule và xử lý ( lắng nghe sự kiện blur , input ,...)
    options.rules.forEach(function (rule) {
      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      let inputElement = formElement.querySelector(rule.selector);
      // console.log(inputElement);

      if (inputElement) {
        //xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          Validate(inputElement, rule);
        };
        //xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          let errorElement = getParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(options.errorSelector);
          errorElement.innerText = "";
          getParent(inputElement, options.formGroupSelector).classList.remove(
            "invalid"
          );
        };
      }
    });
  }
}

//Nguyên tắc của các rules:
//1. Khi có lỗi => trả message lỗi
//2. khi hợp lệ => undefined
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      let regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(value) ? undefined : "Trường này phải là Email";
    },
  };
};

var textt = "";
const renderResponText = document.querySelector("#form-required");

Validator({
  form: "#form-required",
  formGroupSelector: ".form-group",
  errorSelector: ".form-message",
  rules: [Validator.isRequired("#email"), Validator.isEmail("#email")],
  onSubmit: function (data) {
    var emailApi = "https://608619ffd14a870017578a86.mockapi.io/persona/email";
    var options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch(emailApi, options).then((res) => res.json());
    function innterText(text) {
      var emailApi =
        "https://608619ffd14a870017578a86.mockapi.io/persona/email";

      fetch(emailApi)
        .then((res) => res.json())
        .then((data) => {
          textt = `<p class="responText">${data[0].text}</p>`;
          console.log(textt);
          renderResponText.innerHTML = textt;
        });
    }
    innterText();
  },
});

function clickDropdownItems() {
  callApi().then((data) => {
    const clickDropDown2 = document.getElementById("click-dropdown");
    const itemsDrp2 = [...document.querySelectorAll(".flag img")];

    clickDropDown2.addEventListener("click", function (e) {
      e.preventDefault();
      translateItems();
    });

    itemsDrp2.forEach((flagss) => {
      flagss.addEventListener("click", function (e) {
        if (e.target) {
          translateItems();
        }
        const selectedFlagAttr = flagss.getAttribute("data");
        data.forEach((flags) => {
          let selectedFlag = flags.header.navbar.flag[`${selectedFlagAttr}`];
          newString = `${selectedFlag}`;
          document.querySelector("#click-dropdown .nav-country-logo__img").src =
            newString;
        });
      });
    });
  });
}

function translateItems() {
  const itemsDrp2 = [...$$$(".flag img")];
  let i;
  let timeDeplay = 0;
  let a = 100;
  const btnDrp = document.getElementById("myDropdown").classList.toggle("show");
  if (btnDrp) {
    timeDeplay = 0;
    for (i of itemsDrp2) {
      timeDeplay += 0.1;
      i.style.transition = "transform " + timeDeplay + "s ease-in-out";
      i.style.transform = "translateX(0px)";
    }
  } else {
    timeDeplay = 0;
    for (i of itemsDrp2) {
      timeDeplay += 0.1;
      i.style.transition = "transform " + timeDeplay + "s ease-in-out";
      i.style.transform = "translateX(" + a + "px)";
    }
  }
}

const test222 = document.querySelector("#hero div");
