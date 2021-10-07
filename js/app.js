const navSlide = () =>{
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav__ul")
    const body = document.querySelector("body")

    burger.addEventListener("click", ()=>{
        nav.classList.toggle("nav__ul--active")
        body.classList.toggle("disabled")
        burger.classList.toggle("change")
    })
}
navSlide()