// Problem link: https://edabit.com/challenge/YT2kXSMEtACPPk35R

"use strict";

function intWithinBounds(n, lower, upper) {
  return Number.isInteger(n) && n >= lower && n < upper ? true : false;
}
