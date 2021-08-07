const burgerElement = document.querySelector(".menu__burger"),
  menuBody = document.querySelector(".menu__body"),
  menuList = menuBody.querySelector(".menu__list"),
  menuItems = menuBody.querySelectorAll(".menu__item"),
  body = document.querySelector("body"),
  siteHeader = document.querySelector(".header");

burgerElement.addEventListener("click", () => {
  menuBody.classList.toggle("active");
  menuList.classList.toggle("active");
  burgerElement.classList.toggle("active");
  menuItems.forEach((item) => {
    item.classList.toggle("column");
  });
  body.classList.toggle("not-scrollable");
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

// Слайдер


// window.addEventListener("scroll", () => {
//   siteHeader.style =
//     "position: fixed;" + "  top: 0;" + "  left: 0;" + "  right: 0;";
// });


