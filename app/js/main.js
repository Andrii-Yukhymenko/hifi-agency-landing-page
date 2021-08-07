"use strict";

var burgerElement = document.querySelector(".menu__burger"),
    menuBody = document.querySelector(".menu__body"),
    menuList = menuBody.querySelector(".menu__list"),
    menuItems = menuBody.querySelectorAll(".menu__item"),
    body = document.querySelector("body"),
    siteHeader = document.querySelector(".header");
burgerElement.addEventListener("click", function () {
  menuBody.classList.toggle("active");
  menuList.classList.toggle("active");
  burgerElement.classList.toggle("active");
  menuItems.forEach(function (item) {
    item.classList.toggle("column");
  });
  body.classList.toggle("not-scrollable");
}); // window.addEventListener("scroll", () => {
//   siteHeader.style =
//     "position: fixed;" + "  top: 0;" + "  left: 0;" + "  right: 0;";
// });
//# sourceMappingURL=main.js.map
