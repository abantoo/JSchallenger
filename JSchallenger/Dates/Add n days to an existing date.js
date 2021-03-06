// Problem Link: https://www.jschallenger.com/javascript-dates/add-days-to-date/

// Write a function that takes as argument an object with the properties date and daysToAdd, containing a Javascript date and a number
// It should add daysToAdd days to the date and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

"use strict";

function myFunction({ date, daysToAdd }) {
  return date.setDate(date.getDate() + daysToAdd);
}
