// Problem link: https://edabit.com/challenge/mgCKn998CNowjAZBF

"use strict"

function operation(a, b, op) {
  if (op === "add"){
    return parseInt(a) + parseInt(b);
  }
  else if (op === "subtract"){
    return parseInt(a) - parseInt(b);
  }
  else if (op === "multiply") {
    return parseInt(a) * parseInt(b);
  }
  else if (op === "divide") {
    if (parseInt(b) === 0) {
      return "undefined";
    }
    else {
      return parseInt(a) / parseInt(b);
    }
  }
}
