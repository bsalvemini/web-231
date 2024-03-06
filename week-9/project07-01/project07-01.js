"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Brandon Salvemini
      Date:   3/1/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  // Prevent browser from responding to the submit event
  e.preventDefault();

  // Regular expression variables

  // Matches any uppercase letter A - Z
  let regex1 = /[A-Z]/;

  // Matches any single digit
  let regex2 = /[0-9]/;

  // Matches the characters !$#%
  let regex3 = /[!\$#%]/;

  // If the length of the password (pwd) is less than 8 characters
  if (pwd.length < 8) {
    feedback.innerText = "Your password must be at least 8 characters.";
  } else if (!regex1.test(pwd)) {
    // If regex1 test is false
    // Set innerText of feedback to the message
    feedback.innerText = "Your password must include an uppercase letter.";
  } else if (!regex2.test(pwd)) {
    // If regex2 test is false
    // Set innerText of feedback to the message
    feedback.innerText = "Your password must include a number.";
    // Set innerText of feedback to the message
  } else if (!regex3.test(pwd)) {
    // If regex3 test is false
    feedback.innerText =
      "Your password must include one of the following: !$#%";
  } else {
    // Submit the form if none of the other cases match
    signupForm.submit();
  }
});
