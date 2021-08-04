const burgerElement = document.querySelector(".menu__burger"),
  menuBody = document.querySelector(".menu__body"),
  menuList = menuBody.querySelector(".menu__list"),
  menuItems = menuBody.querySelectorAll(".menu__item"),
  siteHeader = document.querySelector(".header");

burgerElement.addEventListener("click", () => {
  menuBody.classList.toggle("active");
  menuList.classList.toggle("active");
  burgerElement.classList.toggle("active");

  menuItems.forEach((item) => {
    item.classList.toggle("column");
  });
});

window.addEventListener("scroll", () => {
  siteHeader.style =
    "position: fixed;" + "  top: 0;" + "  left: 0;" + "  right: 0;";
});