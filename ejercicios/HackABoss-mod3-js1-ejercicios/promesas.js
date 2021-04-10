'use strict';

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 5000);
//   //reject('nonon');
// });

// myPromise
//   .then((pru) => {
//     console.log(myPromise, pru);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

function fetchData(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

fetchData('https://anapioficeandfire.com/api/characters/583').then((value) => {
  //  console.log(value);
});

async function getOther() {
  const response = await fetch('https://anapioficeandfire.com/api/characters/583');
  const data = await response.json();
  console.log(data);
}

//getOther();

async function getOtherCorto() {
  const data = await (await fetch('https://anapioficeandfire.com/api/characters/583')).json();
  console.log(data);
  return data;
}

const temp = getOtherCorto();
temp.then((response) => {
  console.log(response);
});

