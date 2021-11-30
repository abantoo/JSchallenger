// Problem link: https://edabit.com/challenge/RftQjZs3srJnRBEH8

function removeABC(str) {
  if (str.match(/[abc]/g)) {
    return str.replace(/[abc]/gi, "");
  }
  else {
    return null;
  }
}
