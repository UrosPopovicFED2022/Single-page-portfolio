"use strict";
// First code

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const submitButton = document.getElementById("submit");
const errorMsg = document.getElementsByClassName("contact__error");
const faliureIcon = document.getElementsByClassName("contact__faliure");
const input = document.getElementsByClassName("contact__input");
const succesIcon = document.getElementsByClassName("contact__succes");

const id = (id) => document.getElementById(id);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
});

const engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    faliureIcon[serial].style.opacity = "1";
    succesIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    faliureIcon[serial].style.opacity = "0";
    succesIcon[serial].style.opacity = "1";
    input[serial].style.borderBottom = "1px solid #4EE1A0";
  }
};

// Refactor Code

/*
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  form = id("form"),
  errorMsg = classes("contact__error"),
  succesIcon = classes("contact__succes"),
  faliureIcon = classes("contact__faliure");

form.addEventListener("submit", () => {
  errorMsg[1].innerHTML = "dasdasdasdadasdas";
});

*/
