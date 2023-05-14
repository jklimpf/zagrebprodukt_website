/* JavaScript code */
const serviceLinks = document.querySelectorAll(".service-link");
const modals = document.querySelectorAll(".modal");
const body = document.querySelector("body");

serviceLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetModal = document.querySelector(link.getAttribute("href"));
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
    targetModal.classList.add("active");
    body.classList.add("modal-open"); // add class to body to disable scrolling
  });
});

const closeModalButtons = document.querySelectorAll(".close-service-modal");

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
    body.classList.remove("modal-open"); // remove class from body to enable scrolling
  });
});

// Close modal when clicking outside of it
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("active");
    body.classList.remove("modal-open"); // remove class from body to enable scrolling
  }
});

// carousel

let slidePositionPumpe = 1;
let slidePositionCentirfugalnePumpe = 1;
let slidePositionKatodnaZastita = 1;
let slidePositionGuma = 1;
let slidePositionTisak = 1;
let slidePositionNamjestaj = 1;
let slidePositionHidraulika = 1;

SlideShowPumpe(slidePositionPumpe);
SlideShowCentrifugalnePumpe(slidePositionCentirfugalnePumpe);
SlideShowKatodnaZastita(slidePositionKatodnaZastita);
SlideShowGuma(slidePositionGuma);
SlideShowTisak(slidePositionTisak);
SlideShowNamjestaj(slidePositionNamjestaj);
SlideShowHidraulika(slidePositionHidraulika);

// forward/Back controls
function plusSlides(n) {
  SlideShowPumpe((slidePositionPumpe += n));
  SlideShowCentrifugalnePumpe((slidePositionCentirfugalnePumpe += n));
  SlideShowKatodnaZastita((slidePositionKatodnaZastita += n));
  SlideShowGuma((slidePositionGuma += n));
  SlideShowTisak((slidePositionTisak += n));
  SlideShowNamjestaj((slidePositionNamjestaj += n));
  SlideShowHidraulika((slidePositionHidraulika += n));
}

//  images controls
function currentSlide(n) {
  SlideShowPumpe((slidePositionPumpe = n));
  SlideShowCentrifugalnePumpe((slidePositionCentirfugalnePumpe = n));
  SlideShowKatodnaZastita((slidePositionKatodnaZastita = n));
  SlideShowGuma((slidePositionGuma = n));
  SlideShowTisak((slidePositionTisak = n));
  SlideShowNamjestaj((slidePositionNamjestaj = n));
  SlideShowHidraulika((slidePositionHidraulika = n));
}

function SlideShowPumpe(n) {
  let i;
  const slides = document.getElementsByClassName("ContainersPumpe");
  const circles = document.getElementsByClassName("dotsPumpe");
  if (n > slides.length) {
    slidePositionPumpe = 1;
  }
  if (n < 1) {
    slidePositionPumpe = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionPumpe - 1].style.display = "block";
  circles[slidePositionPumpe - 1].className += " enable";
}

function SlideShowCentrifugalnePumpe(n) {
  let i;
  const slides = document.getElementsByClassName("ContainersCentrPumpe");
  const circles = document.getElementsByClassName("dotsCentrPumpe");
  if (n > slides.length) {
    slidePositionCentirfugalnePumpe = 1;
  }
  if (n < 1) {
    slidePositionCentirfugalnePumpe = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionCentirfugalnePumpe - 1].style.display = "block";
  circles[slidePositionCentirfugalnePumpe - 1].className += " enable";
}

function SlideShowKatodnaZastita(n) {
  let i;
  const slides = document.getElementsByClassName("ContainersKatodnaZastita");
  const circles = document.getElementsByClassName("dotsKatodnaZastita");
  if (n > slides.length) {
    slidePositionKatodnaZastita = 1;
  }
  if (n < 1) {
    slidePositionKatodnaZastita = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionKatodnaZastita - 1].style.display = "block";
  circles[slidePositionKatodnaZastita - 1].className += " enable";
}

function SlideShowGuma(n) {
  let i;
  const slides = document.getElementsByClassName("ContainersGuma");
  const circles = document.getElementsByClassName("dotsGuma");
  if (n > slides.length) {
    slidePositionGuma = 1;
  }
  if (n < 1) {
    slidePositionGuma = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionGuma - 1].style.display = "block";
  circles[slidePositionGuma - 1].className += " enable";
}

function SlideShowTisak(n) {
  let i;
  const slides = document.getElementsByClassName("ContainersTisak");
  const circles = document.getElementsByClassName("dotsTisak");
  if (n > slides.length) {
    slidePositionTisak = 1;
  }
  if (n < 1) {
    slidePositionTisak = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionTisak - 1].style.display = "block";
  circles[slidePositionTisak - 1].className += " enable";
}

function SlideShowNamjestaj(n) {
  let i;
  const slides = document.getElementsByClassName("ContainersNamjestaj");
  const circles = document.getElementsByClassName("dotsNamjestaj");
  if (n > slides.length) {
    slidePositionNamjestaj = 1;
  }
  if (n < 1) {
    slidePositionNamjestaj = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionNamjestaj - 1].style.display = "block";
  circles[slidePositionNamjestaj - 1].className += " enable";
}

function SlideShowHidraulika(n) {
  let i;
  const slides = document.getElementsByClassName("ContainersHidraulika");
  const circles = document.getElementsByClassName("dotsHidraulika");
  if (n > slides.length) {
    slidePositionHidraulika = 1;
  }
  if (n < 1) {
    slidePositionHidraulika = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePositionHidraulika - 1].style.display = "block";
  circles[slidePositionHidraulika - 1].className += " enable";
}
