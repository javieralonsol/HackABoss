'use strict';
'use strict';

const persons = [
  {
    name: 'Pedro',
    age: 35,
    country: 'ES',
    infected: true,
    pet: 'Troski',
  },
  {
    name: 'Elisabeth',
    age: 14,
    country: 'UK',
    infected: true,
    pet: 'Firulais',
  },
  {
    name: 'Pablo',
    age: 25,
    country: 'ES',
    infected: false,
    pet: 'Berritxu',
  },
  {
    name: 'Angela',
    age: 18,
    country: 'DE',
    infected: false,
    pet: 'Noodle',
  },
  {
    name: 'Boris',
    age: 50,
    country: 'UK',
    infected: true,
    pet: 'Leon',
  },
  {
    name: 'Donald',
    age: 69,
    country: 'US',
    infected: false,
    pet: 'Pence',
  },
];

const pets = [
  {
    name: 'Troski',
    animal: 'perro',
  },
  {
    name: 'Firulais',
    animal: 'perro',
  },
  {
    name: 'Berritxu',
    animal: 'loro',
  },
  {
    name: 'Noodle',
    animal: 'araña',
  },
  {
    name: 'Leon',
    animal: 'gato',
  },
  {
    name: 'Pence',
    animal: 'perro',
  },
];

const animals = [
  {
    name: 'perro',
    legs: 4,
  },
  {
    name: 'araña',
    legs: 8,
  },
  {
    name: 'gato',
    legs: 4,
  },
  {
    name: 'loro',
    legs: 2,
  },
  {
    name: 'gallina',
    legs: 2,
  },
];

const countries = [
  {
    code: 'CN',
    name: 'China',
    population: 1439,
    infected: 81999,
  },
  {
    code: 'US',
    name: 'Estados Unidos',
    population: 331,
    infected: 112468,
  },
  {
    code: 'DE',
    name: 'Alemania',
    population: 83,
    infected: 56202,
  },
  {
    code: 'ES',
    name: 'España',
    population: 46,
    infected: 72248,
  },
  {
    code: 'UK',
    name: 'Reino Unido',
    population: 67,
    infected: 17301,
  },
];

/**
 * EJERCICIOS
 */

// Número total de infectados del array de personas
const numTotInfPersons = persons.reduce((accumulator, person) => accumulator + (person.infected ? 1 : 0), 0);

console.log('numTotInfPersons', numTotInfPersons);

// Número total de sanos
const numTotSanPersons = persons.reduce((accumulator, person) => accumulator + (person.infected ? 0 : 1), 0);

console.log('numTotSanPersons', numTotSanPersons);

// Numero total de infectados en los países (del array de países)
const numTotInfCountries = countries.reduce((accumulator, country) => accumulator + country.infected, 0);

console.log('numTotInfCountries', numTotInfCountries);

// País con más infectados (del array de países)
const mostInfCountry = countries.reduce((accumulator, country) =>
  country.infected > accumulator.infected ? country : accumulator
);

console.log('mostInfCountry', mostInfCountry);

// Array con nombre de todas las mascotas
const namePets = persons.map((person) => person.pet);

console.log('namePets', namePets);

// Array con las personas infectadas del array de personas
const personsInfected = persons.filter((person) => person.infected);

console.log('personsInfected', personsInfected);

// Array de españoles con perro
const espWidthDog = persons
  .filter((person) => person.country === 'ES')
  .filter((person) => pets.find((pet) => pet.name === person.pet && pet.animal === 'perro'));

console.log('espWidthDog', espWidthDog);

// Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota
const personWithPet = persons.map(({ ...person }) => {
  person.animal = pets.find((pet) => pet.name === person.pet)?.animal;
  person.patas = animals.find((animal) => animal.name === person.animal)?.legs;
  return person;
});

console.log('personWithPet', personWithPet);

// A partir de las personas sacar el animal que tienen más personas como mascota
let cont = 0;
const mostAnimal = personWithPet
  .reduce((accumulator, person) => {
    const temp = accumulator.findIndex((item) => item.animal === person.animal);
    if (temp > -1) {
      accumulator[temp].ammount++;
    } else {
      accumulator.push({ animal: person.animal, ammount: 1 });
    }
    return accumulator;
  }, [])
  .reduce((accumulator, pet) => (pet.ammount > accumulator.ammount ? pet : accumulator));

console.log('mostAnimal', mostAnimal);

// Número total de patas de las mascotas de las personas
const numOfLegs = persons.reduce((accumulator, person) => {
  const temp = pets.find((pet) => pet.name === person.pet);
  const temp1 = animals.find((animal) => animal.name === temp.animal);
  return accumulator + temp1.legs;
}, 0);

console.log('numOfLegs', numOfLegs);

// Array con las personas que tienen animales de 4 patas
const personsWith3LegsPet = persons.filter((person) => {
  const petFound = pets.find((pet) => pet.name === person.pet);
  const animalFound = animals.find((animal) => animal.name === petFound.animal);
  return animalFound.legs === 4;
});

console.log('personsWith3LegsPet', personsWith3LegsPet);

// A partir del string 'España' obtener un array de personas no infectadas de ese país
const spainCode = countries.find((country) => country.name === 'España').code;
const personsSpainSane = persons.filter((person) => !person.infected && person.country === spainCode);

console.log('personsSpainSane', personsSpainSane);

// Array de paises que tienen personas con loros como mascota
const countiesWidthParrot = countries.filter((country) => {
  return persons
    .filter((person) => {
      return pets.find((pet) => {
        return pet.name === person.pet && pet.animal === 'loro';
      });
    })
    .find((person) => person.country === country.code);
});

console.log('countiesWidthParrot', countiesWidthParrot);

// Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas
const animals8Legs = animals.filter((animal) => animal.legs === 8);
const animalsName8Legs = pets.filter((pet) => pet.animal === animals8Legs.find((animal) => animal.name).name);
const persons8Legs = persons.filter((person) => person.pet === animalsName8Legs.find((animal) => animal.name).name);
console.log(animals8Legs, animalsName8Legs, persons8Legs);
const numInfected8Legs = persons8Legs.reduce((accumulator, country) => {
  return accumulator + countries.find((person) => person.code === country.country).infected;
}, 0);

console.log('numInfected8Legs', numInfected8Legs);
