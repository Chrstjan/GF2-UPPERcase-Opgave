const name = document.getElementById("fName");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("Email");

const form = document.getElementById("contact-form");
const errorElement = document.getElementById("errorMessages");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Navn skal udfyldes");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
