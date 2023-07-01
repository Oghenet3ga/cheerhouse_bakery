function changeHome(event) {
  event.preventDefault();
  convertHome.classList.add("active");
  convertAbout.classList.remove("active");
  convertProducts.classList.remove("active");
  convertGallery.classList.remove("active");
  convertContact.classList.remove("active");
}
let convertHome = document.querySelector("#home");
convertHome.addEventListener("click", changeHome);

function changeAbout(event) {
  event.preventDefault();
  convertHome.classList.remove("active");
  convertAbout.classList.add("active");
  convertProducts.classList.remove("active");
  convertGallery.classList.remove("active");
  convertContact.classList.remove("active");
}
let convertAbout = document.querySelector("#about");
convertAbout.addEventListener("click", changeAbout);

function changeProducts(event) {
  event.preventDefault();
  convertHome.classList.remove("active");
  convertAbout.classList.remove("active");
  convertProducts.classList.add("active");
  convertGallery.classList.remove("active");
  convertContact.classList.remove("active");
}
let convertProducts = document.querySelector("#products");
convertProducts.addEventListener("click", changeProducts);

function changeGallery(event) {
  event.preventDefault();
  convertHome.classList.remove("active");
  convertAbout.classList.remove("active");
  convertProducts.classList.remove("active");
  convertGallery.classList.add("active");
  convertContact.classList.remove("active");
}
let convertGallery = document.querySelector("#gallery");
convertGallery.addEventListener("click", changeGallery);

function changeContact(event) {
  event.preventDefault();
  convertHome.classList.remove("active");
  convertAbout.classList.remove("active");
  convertProducts.classList.remove("active");
  convertGallery.classList.remove("active");
  convertContact.classList.add("active");
}
let convertContact = document.querySelector("#contact");
convertContact.addEventListener("click", changeContact);

//rotate(-25deg)
