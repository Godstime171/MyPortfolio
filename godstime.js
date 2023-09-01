const aboutLink = document.querySelector(".about_me");
const experienceLink = document.querySelector(".experience_me");
const workLink = document.querySelector(".work_me");
const contactLink = document.querySelector(".contact_me");
const section1 = document.querySelector(".about");
const section2 = document.querySelector(".experience");
const section3 = document.querySelector(".work");
const section4 = document.querySelector(".contact");
const headerBar = document.querySelector(".header");
const headerHeight = headerBar.getBoundingClientRect().height;
// const headerHeight = headerBar.getBoundingClientRect().height;

/////////////////////////////////////////////////
// Sticky Nav Bar
// const obsCallback = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) {
//     headerBar.classList.add("sticky");
//     aboutLink.classList.add("sticky");
//     experienceLink.classList.add("sticky");
//     workLink.classList.add("sticky");
//     contactLink.classList.add("sticky");
//   } else {
//     headerBar.classList.remove("sticky");
//     aboutLink.classList.remove("sticky");
//     experienceLink.classList.remove("sticky");
//     workLink.classList.remove("sticky");
//     contactLink.classList.remove("sticky");
//   }
// };
// const obsOptions = {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${headerHeight}px`,
// };

// const headerObs = new IntersectionObserver(obsCallback, obsOptions);
// headerObs.observe(section1);
///////////////////////////////////////////////
// console.log(section3);
// console.log(experienceLink);
// console.log(workLink);
/////////////////////////////////////////////////
// Smooth movement from Navigation Buttons
aboutLink.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});
experienceLink.addEventListener("click", function () {
  section2.scrollIntoView({ behavior: "smooth" });
});
workLink.addEventListener("click", function () {
  section3.scrollIntoView({ behavior: "smooth" });
});
contactLink.addEventListener("click", function () {
  section4.scrollIntoView({ behavior: "smooth" });
});
///////////////////////////////////////////////

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = "";
});

//////////////////// youtube
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
