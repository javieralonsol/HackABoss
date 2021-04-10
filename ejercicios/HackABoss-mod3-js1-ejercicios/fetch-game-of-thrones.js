'use strict';

/*
Recuperar los datos de la casa Targaryen de juego de la API de Game of Thrones, de esta casa deberemos averiguar cual es el Lord actual (almacenado en currentLord) y recuperar sus datos, los del lord.

Del lord actual debemos sacar por la consola el nombre (name), y los titulos (titles) cada uno en una linea por consola.

Enlace para hacer fetch https://www.anapioficeandfire.com/api/houses/378
*/

const url = 'https://www.anapioficeandfire.com/api/houses/378';

async function findActualLord(url) {
  await fetch(url).then((response) => {
    response.json().then((value) => {
      value.currentLord ? findActualLord(value.currentLord) : console.log('uno', value.name, value.titles);
    });
  });
}

findActualLord(url);

async function getLordTitles(url) {
  const house = await (await fetch(url)).json();
  const lord = await (await fetch(house.currentLord)).json();
  console.log('dos', lord.name, lord.titles);
  return lord;
}

getLordTitles(url).then((data) => {
  console.log('cuatro', data);
});

async function getJson(url) {
  return await (await fetch(url)).json();
}

getJson(url)
  .then((contents) => {
    getJson(contents.currentLord).then((contents) => console.log('tres', contents.name, contents.titles));
  })
  .catch((error) => console.log('¡¡¡error!!!' + error));

console.log('FIN');
