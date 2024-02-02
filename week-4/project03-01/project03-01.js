/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Brandon Salvemini
      Date:   1/31/2024

      Filename: project03-01.js
*/

// Collection of all elements with the menuItem class
let menuItems = document.getElementsByClassName("menuItem");

// Loop through all items in menuItems collection and assign click event listeners to them
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Function to calculate order total and display it on the page
function calcTotal() {
  // Initialize orderTotal variable to hold order total
  let orderTotal = 0;

  // Loop through all items in menuItems collection and check if they are checked
  for (let i = 0; i < menuItems.length; i++) {
    // If menu item i is checked
    if (menuItems[i].checked) {
      // Add the number value of menu item i to the order total
      // The Number() function converts the string value attribute to a number
      orderTotal = orderTotal + Number(menuItems[i].value);
    }
  }

  // Format orderTotal as currency and display it on the page
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
