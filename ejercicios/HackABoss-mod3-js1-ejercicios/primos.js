'use strict';

const numeroMaximo = 100;
let primo = true;
for (let f = 1; f <= numeroMaximo; f++) {
  primo = true;
  for (let g = 2; g < f; g++) {
    if (f % g === 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    console.log(f);
  }
}

function isDivisible(number1, number2) {
  return number1 % number2 === 0;
}

function isPrime(myNumber) {
  for (let i = 2; i < myNumber; i++) {
    if (isDivisible(myNumber, i)) {
      return false;
    }
  }
  return true;
}

function zeroHundred() {
  for (let i = 0; i < 100; i++) {
    if (isPrime(i + 1)) {
      console.log(i + 1);
    }
  }
}

zeroHundred();
