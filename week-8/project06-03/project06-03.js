"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Brandon Salvemini
      Date:   2/26/2024

      Filename: project06-03.js
*/

// Variable for form element with the id "useShip"
let useShip = document.getElementById("useShip");

// Run the copyShippingToBilling function when use ship is clicked
useShip.addEventListener("change", copyShippingToBilling);

// Function to copy shipping address fields to billing address fields
function copyShippingToBilling() {
  // If useShip checkbox is checked
  if (useShip.checked) {
    // Set the value of the firstnameBill to the value of the firstnameShip field
    document.getElementById("firstnameBill").value =
      document.getElementById("firstnameShip").value;

    // Set the value of the lastnameBill to the value of the lastnameShip field
    document.getElementById("lastnameBill").value =
      document.getElementById("lastnameShip").value;

    // Set the value of the address1Bill to the value of the address1Ship field
    document.getElementById("address1Bill").value =
      document.getElementById("address1Ship").value;

    // Set the value of the address2Bill to the value of the address2Ship field
    document.getElementById("address2Bill").value =
      document.getElementById("address2Ship").value;

    // Set the value of the cityBill to the value of the cityShip field
    document.getElementById("cityBill").value =
      document.getElementById("cityShip").value;

    // Set the value of the countryBill to the value of the countryShip field
    document.getElementById("countryBill").value =
      document.getElementById("countryShip").value;

    // Set the value of the codeBill to the value of the codeShip field
    document.getElementById("codeBill").value =
      document.getElementById("codeShip").value;

    // Set the selectedIndex of the stateBill to the selectedIndex of the stateShip field
    document.getElementById("stateBill").selectedIndex =
      document.getElementById("stateShip").selectedIndex;
  }
}

// Variable to hold the elements of the form
// Selects all elements with an input type of text
let formElements = document.querySelectorAll("input[type='text']");

// Variable to hold the number of elements in the formElements node list
let fieldCount = formElements.length;

// Variable to reference the element with the the id "errorBox"
let errorBox = document.getElementById("errorBox");

// Assign a listener that calls the showValidationError() function to each
// element in formElements
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// Function to show validation error
function showValidationError(evt) {
  // Prevent browser from applying native tools in response to invalid data
  evt.preventDefault();

  // Set the text content of errorBox to the message
  errorBox.textContent = "Complete all highlighted fields";
}
