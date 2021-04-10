'use strict';

/* primero la matriz y después se hacen las diagonales */

function makeMatrix(number) {
  const matrix = [];

  for (let i = 0; i < number; i++) {
    matrix[i] = [];
    //matrix[j] = new Array(number).fill('*');
    for (let j = 0; j < number; j++) {
      matrix[i][j] = '*';
      //matrix[i].push('*');
    }
  }

  return matrix;
}

function makeDiagonals(number) {
  const matrixTemp = makeMatrix(number);
  for (let i = 0; i < number; i++) {
    matrixTemp[i][i] = '👻';
    matrixTemp[i][number - i - 1] = '👻';
  }
  return matrixTemp;
}

console.log(makeDiagonals(7));
