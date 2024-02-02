/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Brandon Salvemini
      Date:   1/23/2024

      Filename: project02-04.js
 */

// Declare constants for the application
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Add click event handlers for each checkbox
document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

// Function to calculate the totals and display them on the page
function calcTotal() {
  // Declare variable for cost
  let cost = 0;

  // Declare variables for checked state of each check box
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // Add the cost of chicken if purchased
  cost += buyChicken ? CHICKEN_PRICE : 0;

  // Add the cost of halibut if purchased
  cost += buyHalibut ? HALIBUT_PRICE : 0;

  // Add the cost of burger if purchased
  cost += buyBurger ? BURGER_PRICE : 0;

  // Add the cost of salmon if purchased
  cost += buySalmon ? SALMON_PRICE : 0;

  // Add the cost of salad if purchased
  cost += buySalad ? SALAD_PRICE : 0;

  // Display the food total
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Calculate sales tax
  let tax = cost * SALES_TAX;

  // Display the tax
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Calculate the total cost
  let totalCost = cost + tax;

  // Display the total cost
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
