'use strict';

const desordenado = [16, 27, 3, 4, 12, 1, 9, 28, 5];

function mySort(unsortedArray) {
  const sortedArray = [];
  for (let i = 0; i < unsortedArray.length; i++) {
    sortedArray[unsortedArray[i]] = unsortedArray[i];
  }
  return Object.values(sortedArray);
}

console.log('mySort', mySort(desordenado));

function sort2(unsortedArray, sortedArray = [...unsortedArray]) {
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] > sortedArray[i + 1]) {
      const temp = sortedArray[i];
      sortedArray[i] = sortedArray[i + 1];
      sortedArray[i + 1] = temp;
      sort2(sortedArray, sortedArray);
    }
  }
  return sortedArray;
}

console.log('sort2', sort2(desordenado));

function sort3(unsortedArray) {
  const sortedArray = [...unsortedArray];
  for (let i = 1; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }
  return sortedArray;
}

console.log('sort3', sort3(desordenado));
