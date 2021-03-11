const hamburger = document.querySelector("#hamburger")
const close = document.querySelector("#close")
const navLinks = document.querySelector("#nav-links")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("hidden")
  close.classList.toggle("hidden")
  hamburger.classList.toggle("hidden")
})

close.addEventListener("click", () => {
  navLinks.classList.toggle("hidden")
  close.classList.toggle("hidden")
  hamburger.classList.toggle("hidden")
})