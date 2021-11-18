// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

function myFunction(a, b) {
  const c = Math.abs(a - b) / 1000;
  const hrs = Math.floor(c / 3600);
  const min = Math.floor(c / 60) % 60;
  const sec = Math.floor(c) % 60;
  return { hrs, min, sec };
}

//Problem link: https://www.jschallenger.com/javascript-dates/difference-between-dates
