// Detect if a link's href goes to the current page

function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem });
  }
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll("a[href]").forEach((a) => {
  a.addEventListener("click", (e) => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);

//load
//
window.onload = function loadBus() {
  document.getElementById("loading").style.display = "none";
};

// scroll event
window.onscroll = function () {
  scrollFunction();
};

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
