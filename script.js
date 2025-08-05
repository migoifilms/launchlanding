console.log("Welcome to Migoi Films!");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.padding = "1rem 1rem";
    document.querySelector(".header-content .logo").style.width = "80px";
    document.querySelector(".header-content .logo").style.height = "80px";
  } else {
    document.querySelector("header").style.padding = "2rem 1rem";
    document.querySelector(".header-content .logo").style.width = "100px";
    document.querySelector(".header-content .logo").style.height = "100px";
  }
}
