/**
 * #############################
 * ##  E J E R C I C I O   3  ##
 * #############################
 *
 * Utiliza los métodos map, filter o reduce para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

'use strict';

const persons = [
  {
    name: 'Berto',
    country: 'ES',
    age: 44,
    car: 'LU9286V',
    pet: {
      name: 'Moon',
      type: 'perro',
    },
  },
  {
    name: 'Jess',
    country: 'UK',
    age: 29,
    car: 'GB2913U',
    pet: {
      name: 'Kit',
      type: 'gato',
    },
  },
  {
    name: 'Tom',
    country: 'UK',
    age: 36,
    car: 'GB8722N',
    pet: {
      name: 'Rex',
      type: 'perro',
    },
  },
  {
    name: 'Alexandre',
    country: 'FR',
    age: 19,
    car: 'FT5386P',
    pet: {
      name: 'Aron',
      type: 'gato',
    },
  },
  {
    name: 'Rebeca',
    country: 'ES',
    age: 32,
    car: 'MD4578T',
    pet: {
      name: 'Carbón',
      type: 'gato',
    },
  },
  {
    name: 'Stefano',
    country: 'IT',
    age: 52,
    car: 'LP6572I',
    pet: {
      name: 'Bimbo',
      type: 'perro',
    },
  },
  {
    name: 'Colette',
    country: 'FR',
    age: 22,
    car: 'FU8929P',
    pet: {
      name: 'Amadeu',
      type: 'gato',
    },
  },
];

const cars = [
  {
    id: 'LU9286V',
    brand: 'Citroen',
    model: 'Xsara',
  },
  {
    id: 'GB2913U',
    brand: 'Fiat',
    model: 'Punto',
  },
  {
    id: 'GB8722N',
    brand: 'Opel',
    model: 'Astra',
  },
  {
    id: 'FT5386P',
    brand: 'Ford',
    model: 'Focus',
  },
  {
    id: 'MD4578T',
    brand: 'Opel',
    model: 'Corsa',
  },
  {
    id: 'LP6572I',
    brand: 'Ford',
    model: 'Fiesta',
  },
  {
    id: 'FU8929P',
    brand: 'Fiat',
    model: 'Uno',
  },
];

// Obtén la suma total de todas las edades de las personas
const ageTotal = persons.reduce((acc, person) => (acc += person.age), 0);
console.log('ageTotal', ageTotal);

// Obtén la suma total de todas las edades de las personas francesas
const ageFrench = persons.reduce((acc, person) => (person.country === 'FR' ? (acc += person.age) : acc), 0);
console.log('ageFrench', ageFrench);

// Obtén un array con el nombre de todas las mascotas
const pets = [...persons].map((person) => person.pet.name);
console.log('pets', pets);

// Obtén un array con las personas que tengan gato
const personsWithCat = persons.filter((person) => person.pet.type === 'gato');
console.log('personsWithCat', personsWithCat);

// Obtén un array con los coches de los españoles
const carsOfSpanish = cars.filter((car) => {
  return persons.find((person) => person.country === 'ES' && car.id === person.car);
});
console.log('carsOfSpanish', carsOfSpanish);

// Obtén un array con las personas que tengan un coche de la marca Ford.
const personsWidthFord = persons.filter((person) => {
  return cars.find((car) => person.car === car.id && car.brand === 'Ford');
});
console.log('personsWidthFord', personsWidthFord);

// Obtén un array con todas las personas con toda la info de su coche
const personsWithCarInfo = [...persons].map((person) => {
  const personCopy = { ...person }; // para que no modifique persons
  const carInfo = cars.find((car) => personCopy.car === car.id);
  personCopy['carBrand'] = carInfo.brand;
  personCopy['carModel'] = carInfo.model;
  return personCopy;
});
console.log('personsWithCarInfo', personsWithCarInfo);

// ó
const personsWithCarInfo2 = [...persons].map((person) => {
  const personCopy = { ...person }; // para que no modifique persons
  personCopy.carInfo = cars.find((car) => personCopy.car === car.id);
  delete personCopy.car;
  return personCopy;
});
console.log('personsWithCarInfo2', personsWithCarInfo2);
