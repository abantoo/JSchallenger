// Problem link: https://edabit.com/challenge/ejfdLAp673DwxSg5R

"use strict";

function areaOfCountry(name, area) {
  return `${name} is ${((area * 100) / 148940000).toFixed(
    2
  )}% of the total world's landmass`;
}
