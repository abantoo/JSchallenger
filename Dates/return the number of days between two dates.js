// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(date1, date2) {
  return Math.abs((date1.getTime() - date2.getTime()) / (24 * 3600 * 1000));
}

//Problem link: https://www.jschallenger.com/javascript-dates/number-days-between-two-dates
