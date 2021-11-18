// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

function myFunction(date1, date2) {
  return date1.getTime() === date2.getTime();
}

//authors solution
function myFunction(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

//Problem link: https://www.jschallenger.com/javascript-dates/two-dates-same-day
