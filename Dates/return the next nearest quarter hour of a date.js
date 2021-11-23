// Problem link: https://www.jschallenger.com/javascript-dates/javascript-nearest-quarter-hour-date/

// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

"use strict";

function myFunction(date) {
  a = date.getMinutes();
  if (a > 45) return 0;
  else {
    for (let i = 15; i < 60; i += 15) {
      if (i - a > 0) return i;
    }
  }
}
