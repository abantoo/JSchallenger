// Problem Link: https://www.jschallenger.com/javascript-dates/two-dates-within-one-hour

// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

"use strict";

function myFunction(date1, date2) {
  return Math.abs(date1.getTime() - date2.getTime()) <= 60 * 60 * 1000;
}

//or just:

function myFunction(date1, date2) {
  return Math.abs(date1 - date2) <= 60 * 60 * 1000;
}
