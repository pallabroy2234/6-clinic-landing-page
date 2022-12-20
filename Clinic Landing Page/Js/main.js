// ! Navbar Hide

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((e) => {
  e.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// ! Navbar Fixed

let nav = document.querySelector(".navigation-wrapper");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};
