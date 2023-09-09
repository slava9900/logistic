const headerMenu = document.querySelector(".header__block");
const headerLogo = document.querySelector(".header__logo");
const menuBtn = document.querySelector(".header__btn--menu");
const menuBtnClose = document.querySelector(".header__btn--close");
const headerList = document.querySelector(".header__list");
const selectThemes = document.querySelector(".main__select");
const htmlRoot = document.querySelector(":root");

menuBtn.addEventListener("click", () => {
  headerMenu.classList.add("active");
  menuBtnClose.classList.add("active");
  menuBtn.classList.add("hover");
});

menuBtnClose.addEventListener("click", () => {
  headerMenu.classList.remove("active");
  menuBtnClose.classList.remove("active");
  menuBtn.classList.remove("hover");
});

const allItems = Array.from(headerList.children);
allItems.forEach((el) => {
  el.addEventListener("click", () => {
    headerMenu.classList.remove("active");
    menuBtnClose.classList.remove("active");
    menuBtn.classList.remove("hover");
  });
});

const time = 2000;
const step = 1;
let interval1;
let interval2;

function outNum(num, step, elem) {
  let el = document.querySelector(elem);
  let count = 0;
  let timeInterval = Math.round(time / (num / step));
  const intervalId = setInterval(() => {
    count = count + step;
    if (count === num) {
      clearInterval(intervalId);
    }
    el.innerText = count + "+";
  }, timeInterval);
}

outNum(20, 1, ".number__experience");
outNum(100, 1, ".number__clients");
outNum(5000, 100, ".number__order");

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}
