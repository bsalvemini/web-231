/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Brandon Salvemini
      Date:   1/16/2024

      Filename: project02-02.js
 */

// Add event handler for when the button is clicked, run the verifyForm() function when button is clicked
document.getElementById("submit").onclick = verifyForm;

function verifyForm() {
  // Variables for form elements
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  // If all fields are filled, show an alert with "Thank you!", otherwise show an alert with "Please fill in all fields"
  name && email && phone
    ? alert("Thank you!")
    : alert("Please fill in all fields");
}
