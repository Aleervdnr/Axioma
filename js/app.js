const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__ul");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav__ul--active");
    body.classList.toggle("disabled");
    burger.classList.toggle("change");
  });
};
navSlide();

const sticky = () => {
  window.addEventListener("scroll", () => {
    var header = document.querySelector(".header");
    header.classList.toggle("header--active", window.scrollY > 0);
  });
};

sticky();

// nav section active on scroll

const sections = document.querySelectorAll("section")
const navlink = document.querySelectorAll("header nav ul li a")

window.addEventListener("scroll", ()=>{
  let current = ""
  sections.forEach( section =>{
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if(scrollY >= sectionTop - sectionHeight/3){
      current = section.getAttribute("id")
    }
  })

  navlink.forEach( a =>{
    a.classList.remove("nav--hover-active")
    if(a.classList.contains(current+"__link")){
      a.classList.add("nav--hover-active")
    }
  })
})