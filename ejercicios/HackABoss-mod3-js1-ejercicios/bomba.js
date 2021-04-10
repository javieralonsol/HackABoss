'use strict';

const myRandom = Math.round(Math.random() * 10);
let bombDisabled = false;
console.log(myRandom);

for (let i = 0; i < 5; i++) {
  let myPrompt = prompt('Introce un número del 1 al 10 para desactivar la bomba');
  if (+myPrompt === myRandom) {
    bombDisabled = true;
    console.log('Bomba desactivada!!!');
    break;
  }
}

if (!bombDisabled) {
  console.log('La boma ha estallado!!!');
}
