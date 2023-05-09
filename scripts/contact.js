const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("contact.php", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      if (response.ok) {
        alert("Poruka poslana!");
        form.reset();
      } else {
        alert("Došlo je do problema prilikom slanja poruke.");
      }
    })
    .catch(function (error) {
      alert("Došlo je do problema prilikom slanja poruke.");
    });
});
