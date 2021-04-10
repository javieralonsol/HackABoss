'use strict';

/* secuencia fibonacci
0 1 1 2 3 5 8 13 21
0 - 0
1 - 1
2 - cibonachi de las 2 anteriores
*/

const número = 50;

// con función recursiva pasando todo el array
function fibonacci(maxNumber, fArray = []) {
  let temp = fArray.length;
  if (temp > 1) {
    temp = fArray[fArray.length - 1] + fArray[fArray.length - 2];
  }
  fArray.push(temp);
  if (fArray.length <= maxNumber) {
    fArray = fibonacci(maxNumber, fArray);
  }
  return fArray;
}

console.time('fibonacci');
console.log('Con función recursiva pasando todo el array', fibonacci(número).pop());
console.timeEnd('fibonacci');

// con función recursiva pasando sólo los últimos dos números
function fibonacci0(theNumber, fArray = [1, 1], contador = 3) {
  contador++;
  let temp = fArray[0] + fArray[1];
  if (contador > theNumber) {
    return temp;
  }
  return fibonacci0(theNumber, [fArray[1], temp], contador);
}

console.time('fibonacci');
console.log('Con función recursiva pasando sólo los últimos dos números', fibonacci0(número));
console.timeEnd('fibonacci');

// con objeto de memoria de valores
const memo = {};
function fibonacci2(position) {
  if (position < 2) {
    return position;
  }
  if (memo[position]) {
    return memo[position];
  }
  memo[position] = fibonacci2(position - 1) + fibonacci2(position - 2);
  return memo[position];
}

console.time('fibonacci');
console.log('Con objeto de memoria de valores', fibonacci2(número));
console.timeEnd('fibonacci');
