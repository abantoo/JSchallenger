function intWithinBounds(n, lower, upper) {
  return Number.isInteger(n) && n >= lower && n < upper ? true : false;
}
