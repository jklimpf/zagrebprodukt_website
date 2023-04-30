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

const closeModalButtons = document.querySelectorAll(".close-modal");

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
