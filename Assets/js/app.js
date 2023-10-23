// const name = document.getElementById("#name");
// const phoneNumber = document.getElementById("#phoneNumber");
// const email = document.getElementById("#email");

// const submit = document.getElementById("#submit");

// submit.addEventListener("click", validate);

// const validate = (e) => {
//     e.preventDefault();

//     let valid = true;

//     if (!name.value) {
//         const nameError = document.getElementById("nameError");
//         nameError.classList.add("visible");
//         name.classList.add("invalid");
//         nameError.setAttribute("aria-hidden", false);
//         nameError.setAttribute("aria-invalid", true);
//     }
//     return valid;
// }

let name = document.contactForm.name.value;
let phoneNumber = document.contactForm.phoneNumber.value;
let email = document.contactForm.email.value;