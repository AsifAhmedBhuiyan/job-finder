'use strict';

const loginButton = document.getElementById("login");
const usernameInput = document.querySelector("input[type='text']");
const passwordInput = document.querySelector("input[type='password']");

// check if username and password are stored in localStorage
const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

if (storedUsername && storedPassword) {
  usernameInput.value = storedUsername;
  passwordInput.value = storedPassword;
}

loginButton.addEventListener("click", function(event) {
  event.preventDefault(); 

  const username = "Asif"; 
  const password = "1234"; 

  if (usernameInput.value === username && passwordInput.value === password) {
    // store username and password in localStorage
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);

    window.location.href = "./home.html"; 
  } else {
    alert("Invalid username or password. Please try again."); 
  }
});

