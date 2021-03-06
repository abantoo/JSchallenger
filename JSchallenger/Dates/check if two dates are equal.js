// Problem Link: https://www.jschallenger.com/javascript-dates/check-if-two-dates-equal

// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as argument
// It should return true if the dates are equal
// It should return false otherwise

"use strict";

function myFunction(date1, date2) {
  return date1.getTime() === date2.getTime();
}
