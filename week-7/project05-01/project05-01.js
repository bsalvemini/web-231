"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Brandon Salvemini
      Date:   2/19/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
let questionList = document.querySelectorAll("div#quiz input");

// Add an onclick event handler to the startQuiz object and run
//  the anonymous function
startQuiz.onclick = function () {
  // Set the class attribute of the overlay object to "showquiz" to show quiz
  overlay.className = "showquiz";

  // Repeat the countdown function every 1000 milliseconds (1 second)
  timeID = setInterval(countdown, 1000);
};

// Function for quiz countdown timer
function countdown() {
  // If timeLeft is equal to 0
  if (timeLeft === 0) {
    // Stop the timer by clearing the interval
    clearInterval(timeID);

    // Declare the totalCorrect variable using the value returned by the
    //  checkAnswers() function
    let totalCorrect = checkAnswers();

    // If totalCorrect equals the length of the correctAnswers array
    if (totalCorrect === correctAnswers.length) {
      // Show an alert window congratulating the student on getting 100%
      window.alert("Congratulations on getting 100%!");
    } else {
      // Show an alert window indicating the number of incorrect answers out
      //  of the total number of questions
      window.alert(
        `You got ${correctAnswers.length - totalCorrect} out of ${
          correctAnswers.length
        } incorrect`
      );

      // Set the value of the timeLeft variable to value of quizTime
      timeLeft = quizTime;

      // Set the the quizClock element to the value of the timeLeft variable
      quizClock.value = timeLeft;

      // Set the class attribute of the overlay object to "hidequiz" to hide quiz
      overlay.className = "hidequiz";
    }
  } else {
    // Decrease the value of the timeLeft variable by 1
    timeLeft = timeLeft - 1;

    // Set the the quizClock element to the value of the timeLeft variable
    quizClock.value = timeLeft;
  }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
      questionList[i].className = "";
    } else {
      questionList[i].className = "wronganswer";
    }
  }
  return correctCount;
}
