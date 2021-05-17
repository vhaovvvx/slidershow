const navBtn = document.querySelectorAll(".navBtn li");
let count;
let newFlag = "";
let newStory = "";
let fightStyle = "";
let harnessFullStreng = "";
const buttonAvailable = [...document.getElementsByClassName("versionTitle")];
const retail = [
  ...document.querySelectorAll(
    ".versionButtonsContainer .versionButton.retailText"
  ),
];
const digital = [
  ...document.querySelectorAll(
    ".versionButtonsContainer .versionButton.digitalText"
  ),
];
const buynow = [...document.querySelectorAll(".gameCoverRetail .buynowButton")];
const headingGameCoverRetailEdition = [
  ...document.querySelectorAll(".gameCoverRetail .launch-header.edition"),
];
const headingGameCoverRetailSteelBook = [
  ...document.querySelectorAll(".gameCoverRetail .launch-header.steelbook"),
];
const headingGameCoverRetailGWP = [
  ...document.querySelectorAll(".gameCoverRetail .launch-header.gwp"),
];

const imgGameCoverRetailLaunchToHide = [
  ...document.querySelectorAll(".gameCoverRetail.launchToHide img"),
];

const imgGameCoverRetailSteelToHide = [
  ...document.querySelectorAll(".gameCoverRetail.steelToHide img"),
];
const imgGameCoverRetailGWP = [
  ...document.querySelectorAll(".gameCoverRetail.gwpToHide img"),
];

const imgLaunchDeluxe = [
  ...document.querySelectorAll(".gameCoverRetail.launchToHide.deluxe img"),
];
const imgLaunchstandard = [
  ...document.querySelectorAll(".gameCoverRetail.launchToHide.standard img"),
];

const headerDeluxe = [
  ...document.querySelectorAll(
    ".gameCoverRetail.launchToHide.deluxe .launch-header"
  ),
];
const headerStandard = [
  ...document.querySelectorAll(
    ".gameCoverRetail.launchToHide.standard .launch-header"
  ),
];
var jsonObject = {};

var radr;
fetch("https://608619ffd14a870017578a86.mockapi.io/persona//p5s")
  .then((response) => response.json())
  .then((json) => {
    var radr = JSON.stringify(json);
    var aaaa = JSON.parse(radr);
    const navLink = aaaa[0].header.navbar;
    const containerLink = aaaa[0].header.container;
    //header
    navBtn[0].innerHTML = navLink.link.media;
    navBtn[1].innerHTML = navLink.link.features;
    navBtn[2].innerHTML = navLink.link.characters;
    document.querySelector(".nav-logo img").src = `${navLink.logo}`;
    document.querySelector(".logo-center img").src = `${containerLink.logo}`;
    document.querySelector(".img-esrb img").src = `${containerLink.esrb}`;
    document.querySelector(".nav-country-logo__img").src = `${navLink.flagUs}`;
    json.forEach((flags) => {
      let flagss = navLink.flag;
      for (let flag in flagss) {
        newFlag += `
        <div class="flag">
          <a href="#" id="${flag}">
            <img src=${flagss[flag]} data="${flag}">
          </a>
       </div> `;
      }
      document.getElementById("myDropdown").innerHTML += newFlag;

      clickDropdownItems(flags);
    });

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
    const media = aaaa[0].media;
    document.querySelector(".media-title").innerHTML = media.heading;
    document.querySelector(".media-main__text").innerHTML = media.textHeading;

    //features
    const features = aaaa[0].features;
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
    const availableRender = aaaa[0].available;
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
    const footerRender = aaaa[0].footer;
    const logoNav = footerRender.footerNav.imgLogo;
    document.querySelector(".connect-with-atlus .connect").innerHTML =
      footerRender.connectWith;
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
const unDisabledBtn = document.querySelector(".subscribe-to-letter__text");

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
          console.log(data[0].text);
          textt = `<p class="responText">${data[0].text}</p>`;
          console.log(textt);
          renderResponText.innerHTML = textt;
        });
    }
    innterText();
  },
});

function clickDropdownItems(flags) {
  // console.log(flags.data);
  const clickDropDown2 = document.getElementById("click-dropdown");
  const itemsDrp2 = [...document.querySelectorAll(".flag img")];
  let i;
  let timeDeplay = 0;
  let a = 100;
  clickDropDown2.addEventListener("click", function (e) {
    e.preventDefault();
    const btnDrp = document
      .getElementById("myDropdown")
      .classList.toggle("show");
    if (btnDrp == true) {
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
  });
  // itemsDrp2.forEach((flagss) => {
  //   flagss.addEventListener("click", function () {
  //     const selectedFlagAttr = flagss.getAttribute("data");
  //     console.log(selectedFlagAttr);
  //     const selectedflag = flags.find((flag) => flag.data == selectedFlagAttr);
  //     console.log(selectedflag);
  //   });
  // });
}
