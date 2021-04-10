// Temp. menor que 20: fondo verde
// Temp. entre 20 y 30: fondo naranja
// Temp. mayor de 30: fondo rojo

const temperaturas = [
  {
    city: "A Coruña",
    min: 17,
    max: 23,
  },
  {
    city: "Ferrol",
    min: 15,
    max: 32,
  },
  {
    city: "Lugo",
    min: -20,
    max: 31,
  },
  {
    city: "Ourense",
    min: 18,
    max: 35,
  },
  {
    city: "Pontevedra",
    min: 18,
    max: 29,
  },
];

const section = document.querySelector("section");
section.style.display = "flex";
section.style.justifyContent = "center";
section.style.alignItems = "center";
section.style.height = "100vh";

const temperaturasTable = document.querySelector("#temperaturas");

  function returnClass(temperature) {
    let returnValue = "medium";
    if (temperature < 1) {
      returnValue = "lower";
    } else if (temperature < 20) {
      returnValue = "low";
    } else if (temperature > 30) {
      returnValue = "high";
    }
    return returnValue;
  }

for (const i of temperaturas) {
  const trElement = document.createElement("tr");
  trElement.innerHTML = `<td>${i.city}</td>
    <td class="${returnClass(i.min)}">${i.min}</td>
    <td class="${returnClass(i.max)}">${i.max}</td>`;
  temperaturasTable.append(trElement);
}


"use strict";

/**
 *  =======================
 *  ··· P E R S O N A S ···
 *  =======================
 */
const persons = [
  {
    name: "Pedro",
    age: 35,
    country: "ES",
    infected: true,
    pet: "Troski",
  },
  {
    name: "Elisabeth",
    age: 14,
    country: "UK",
    infected: true,
    pet: "Firulais",
  },
  {
    name: "Pablo",
    age: 25,
    country: "ES",
    infected: false,
    pet: "Berritxu",
  },
  {
    name: "Angela",
    age: 18,
    country: "DE",
    infected: false,
    pet: "Noodle",
  },
  {
    name: "Boris",
    age: 50,
    country: "UK",
    infected: true,
    pet: "Leon",
  },
  {
    name: "Donald",
    age: 69,
    country: "US",
    infected: false,
    pet: "Pence",
  },
  {
    name: "Pepito",
    age: 36,
    country: "ES",
    infected: false,
    pet: "Carbón",
  },
];

/**
 *  =======================
 *  ··· M A S C O T A S ···
 *  =======================
 */
const pets = [
  {
    name: "Troski",
    type: "perro",
  },
  {
    name: "Firulais",
    type: "perro",
  },
  {
    name: "Berritxu",
    type: "loro",
  },
  {
    name: "Noodle",
    type: "araña",
  },
  {
    name: "Leon",
    type: "gato",
  },
  {
    name: "Pence",
    type: "perro",
  },
  {
    name: "Carbón",
    type: "gato",
  },
];

/**
 *  =======================
 *  ··· A N I M A L E S ···
 *  =======================
 */
const animals = [
  {
    kind: "perro",
    legs: 4,
  },
  {
    kind: "araña",
    legs: 8,
  },
  {
    kind: "gato",
    legs: 4,
  },
  {
    kind: "loro",
    legs: 2,
  },
  {
    kind: "gallina",
    legs: 2,
  },
];

/**
 *  ===================
 *  ··· P A Í S E S ···
 *  ===================
 */
const countries = [
  {
    code: "CN",
    name: "China",
    population: 1439,
    infected: 81999,
  },
  {
    code: "US",
    name: "Estados Unidos",
    population: 331,
    infected: 112468,
  },
  {
    code: "DE",
    name: "Alemania",
    population: 83,
    infected: 56202,
  },
  {
    code: "ES",
    name: "España",
    population: 46,
    infected: 72248,
  },
  {
    code: "UK",
    name: "Reino Unido",
    population: 67,
    infected: 17301,
  },
];

/**
 *  ###########################
 *  ## E J E R C I C I O   1 ##
 *  ###########################
 *
 *  Número total de infectados del array de personas.
 *
 */
console.log(1);
/**
 *  ###########################
 *  ## E J E R C I C I O   2 ##
 *  ###########################
 *
 *  Número total de sanos del array de personas.
 *
 */

/**
 *  ###########################
 *  ## E J E R C I C I O   3 ##
 *  ###########################
 *
 *  Número total de infectados en el array de países.
 *
 */

/**
 *  ###########################
 *  ## E J E R C I C I O   4 ##
 *  ###########################
 *
 *  País con más infectados.
 *
 */

/**
 *  ###########################
 *  ## E J E R C I C I O   5 ##
 *  ###########################
 *
 *  Array con el nombre de todas las mascotas.
 *
 */

/**
 *  ###########################
 *  ## E J E R C I C I O   6 ##
 *  ###########################
 *
 *  Array con las personas infectadas del array de personas.
 *
 */

/**
 *  ###########################
 *  ## E J E R C I C I O   7 ##
 *  ###########################
 *
 *  Array de españoles con perro.
 *
 */

/**
 *  ###########################
 *  ## E J E R C I C I O   8 ##
 *  ###########################
 *
 *  Array con las personas. A mayores, este array debe incluír el objeto con los datos de su mascota
 *
 */

/**
 *  #############################
 *  ## E J E R C I C I O   1 0 ##
 *  #############################
 *
 *  Número total de patas de las mascotas de las personas.
 *
 */

/**
 *  #############################
 *  ## E J E R C I C I O   1 1 ##
 *  #############################
 *
 *  Array con las personas que tienen animales de 4 patas
 *
 */

/**
 *  #############################
 *  ## E J E R C I C I O   1 2 ##
 *  #############################
 *
 *  A partir del string 'ES' obtener un array de personas no infectadas de ese país.
 *
 */

/**
 *  #############################
 *  ## E J E R C I C I O   1 3 ##
 *  #############################
 *
 *  Array de países que tienen personas con loros como mascota.
 *
 */

/**
 *  #############################
 *  ## E J E R C I C I O   1 4 ##
 *  #############################
 *
 *  Número de infectados totales (en el array de países) de los países con mascotas de ocho patas.
 *
 */