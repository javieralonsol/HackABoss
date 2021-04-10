'use strict';

/*
  Vamos a hacer dos classes una para representar zorros y otra para representar gallinas
  Vamos a tener una clase más que representa una granja

  Cuando construimos la granja le pasamos siempre un array de dos animales
  los animales pueden ser zorros o gallinas

  Cuando paso dos gallinas o dos zorros y cierro la puerta de la granja este metodo me devuelve
  tres gallinas o tres zorros respectivamente. Los animales originales siguen, pero el que han criado
  es una nueva referencia.

  Cuando paso un zorro y una gallina o una gallina y un zorro, al cerrar la puerta el metodo me 
  devuelve solo un zorro. Tiene que ser el mismo zorro que ha entrado.

  El metodo de cerrar la puerta siempre devuelve un array

  Metodos que van a tener las clases:
  -Constructor - Todas
  -Criar - zorros y gallinas
  -Comer - zorros y admite de parametro un array de animales
  -Cerrar puerta - Solo la granja
  */

class Zorro {
  nombre;
  constructor() {
    this.nombre = uniqid('', true);
  }

  criar(animales) {
    animales.push(new Zorro());
    return animales;
  }

  comer(animales) {
    return animales.filter((animal) => animal instanceof Zorro);
  }
}

class Gallina {
  nombre;
  constructor() {
    this.nombre = uniqid();
  }

  criar(animales) {
    animales.push(new Gallina());
    return animales;
  }
}

class Granja {
  animales;

  constructor(animales) {
    this.animales = animales;
  }

  cerrarPuerta() {
    if (
      this.animales.every((animal) => animal instanceof Zorro) ||
      this.animales.every((animal) => animal instanceof Gallina)
    ) {
      return this.animales[0].criar(this.animales);
    } else {
      return this.animales.find((animal) => animal instanceof Zorro).comer(this.animales);
    }
  }
}

// crear array random
const numeroDeAnimales = 3,
  misAnimales = [];
for (let i = 0; i < numeroDeAnimales; i++) {
  misAnimales.push(Math.floor(Math.random() * 2) ? new Zorro() : new Gallina());
}

const miGranja = new Granja([...misAnimales]);
console.log(misAnimales);
console.log(miGranja.cerrarPuerta());

function uniqid() {
  return 'xxxxxxxx'.replace(/[x]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
