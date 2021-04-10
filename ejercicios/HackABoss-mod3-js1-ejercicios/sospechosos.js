'use strict';
/*
  Vamos a tener una clase que describe a los sospechosos.
  Cada instancia almacena los datos fisicos de un sospechoso.
  Cada sospechoso tiene un dato de la persona culpable
  Nadie miente
  El tip es privado, para que confiese necesitaremos un método

  Vamos a tener una clase detective
  El detective va a tener un método para investigar
  El metodo de investigar recibe un array de sospechosos
  Y devuelve al único culpable que hay
  OPCIONAL: Podeis ponerle datos personales si quereis pero no es obligatorio.
  Podeis implementar una clase persona de la que heredan el detective y los sospechosos.
*/

// Con estos datos vais a tener que montar las instancias
const names = ['Willy', 'Ivan', 'Ramiro'];
const eyeColor = ['azul', 'marron', 'azul'];
const height = ['bajo', 'alto', 'alto'];
const tattooed = [true, false, false];
const tip = [
  {
    height: 'alto',
  },
  {
    eyeColor: 'marron',
  },
  {
    tattooed: false,
  },
];

// Aqui están los objetos ya montados
const suspects = [
  {
    name: 'Willy',
    eyeColor: 'azul',
    height: 'bajo',
    tattooed: true,
    tip: {
      height: 'alto',
    },
  },
  {
    name: 'Ivan',
    eyeColor: 'marron',
    height: 'alto',
    tattooed: false,
    tip: {
      eyeColor: 'marron',
    },
  },
  {
    name: 'Ramiro',
    eyeColor: 'azul',
    height: 'alto',
    tattooed: false,
    tip: {
      tattooed: false,
    },
  },
];

// con clases
class Sospechoso {
  name;
  eyeColor;
  height;
  tattooed;
  #tip;

  constructor(name, eyeColor, height, tattooed, tip) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.height = height;
    this.tattooed = tattooed;
    this.#tip = tip;
  }

  dameElTip() {
    return this.#tip;
  }
}

class Detective {
  static investigar(sospechosos) {
    // tips a un array
    const sospechososTips = sospechosos.reduce((accumulator, sospechoso) => {
      return { ...accumulator, ...sospechoso.dameElTip() };
    }, {});
    console.log(sospechososTips);

    const sospechososTipsKeys = Object.keys(sospechososTips);
    const sospechososTipsValues = Object.values(sospechososTips);
    for (const sospechoso of sospechosos) {
      let esCulpable = true;
      for (let i = 0; i < sospechososTipsKeys.length; i++) {
        if (sospechoso[sospechososTipsKeys[i]] !== sospechososTipsValues[i]) {
          esCulpable = false;
          break;
        }
      }
      if (esCulpable) {
        console.log('Culpable ' + sospechoso.name);
        break;
      }
    }

    // const culpable = false;
    // for (let eachTip in sospechososTips) {
    // }
    // const culpable = sospechosos.filter((sospechoso) => {
    //   return (
    //     sospechoso.height === height.height &&
    //     sospechoso.eyeColor === eyeColor.eyeColor &&
    //     sospechoso.tattooed === tattooed.tattooed
    //   );
    // });

    //console.log('Culpable ', culpable[0].name);
  }
}

// creamos el array de sospechosos
const sospechosos = names.map((name, i) => new Sospechoso(names[i], eyeColor[i], height[i], tattooed[i], tip[i]));
console.log(sospechosos);

//console.log(sospechosos);
Detective.investigar(sospechosos);
