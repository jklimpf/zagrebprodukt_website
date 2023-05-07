/* JavaScript code */
const serviceLinks = document.querySelectorAll(".service-link");
const modals = document.querySelectorAll(".modal");

serviceLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetModal = document.querySelector(link.getAttribute("href"));
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
    targetModal.classList.add("active");
  });
});

const closeModalButtons = document.querySelectorAll(".close-service-modal");

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
  });
});

// Close modal when clicking outside of it
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("active");
  }
});

// carousel

let slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  let i;
  const slides = document.getElementsByClassName("Containers");
  const circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}
