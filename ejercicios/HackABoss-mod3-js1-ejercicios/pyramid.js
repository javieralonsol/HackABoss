'use strict';

const numberOfFloors = 5;

function createFragment(brick, floors) {
  let output = '';
  for (let i = 0; i < floors; i++) {
    output += brick;
  }
  return output;
}

function buildFloor(aaa, symbol) {
  for (let i = 0; i < numberOfFloors; i++) {
    console.log(aaa);
  }
}

function pyramid0(numberOfFloors) {
  for (let i = 0; i < numberOfFloors; i++) {
    console.log(i + 1);
  }
}

console.log('pyramid0');
pyramid0(numberOfFloors);

function pyramid1(numberOfFloors) {
  for (let i = 0; i < numberOfFloors; i++) {
    console.log(createFragment('*', i + 1));
  }
}

console.log('pyramid1');
pyramid1(numberOfFloors);

function pyramid2(numberOfFloors) {
  for (let i = 0; i < numberOfFloors; i++) {
    console.log(createFragment(' ', numberOfFloors - i - 1) + createFragment('*', i + 1));
  }
}

console.log('pyramid2');
pyramid2(numberOfFloors);

function pyramid3(numberOfFloors) {
  for (let i = 0; i < numberOfFloors; i++) {
    console.log(createFragment(' ', numberOfFloors - i - 1) + createFragment('*', i * 2 + 1));
  }
}

console.log('pyramid3');
pyramid3(numberOfFloors);

function pyramid4(numberOfFloors) {
  pyramid3(numberOfFloors);
  for (let i = 0; i < numberOfFloors - 1; i++) {
    console.log(createFragment(' ', i + 1) + createFragment('*', (numberOfFloors - 1 - i) * 2 - 1));
  }
}

console.log('pyramid4');
pyramid4(numberOfFloors);
