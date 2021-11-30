// Problem link: https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ

"use strict"

class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() {
    return this.sideA * this.sideB;
  }
  getPerimeter() {
    return (this.sideA + this.sideB) * 2;
  }
}

class Circle {
  // put your code here
  constructor(rad) {
    this.rad = rad;
  }

  getArea() {
    return Math.PI * this.rad * this.rad;
  }
  getPerimeter() {
    return 2 * Math.PI * this.rad;
  }
}

