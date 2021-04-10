/**
 * #############################
 * ##  E J E R C I C I O   1  ##
 * #############################
 *
 * A partir del string dado crea un array en el que cada una de las distintas palabras
 * (palabras, no letras) del string sea una posición del array.
 *
 *  - No debe haber letras mayúsculas.
 *
 *  - El array no debe contener signos de puntuación, SOLO LETRAS.
 *
 *  - El array debe estar ordenado por orden alfabético.
 *
 * Resultado esperado: ["adipisicing", "amet", "consectetur", "dolor", "elit", "ipsum", "lorem", "sit"]
 *
 */
'use strict';

const text = 'Lorem Ipsum Dolor Sit Amet Consectetur, ¡Adipisicing Elit!.';

// paso la caena a minúsculas
let result = text.toLowerCase();

// cambio todo lo que no sea letras o espacio por ''
result = result.replace(/[^a-z|\s]/g, '');

// lo divido en un array por los espacios
result = result.split(' ');

// lo ordeno
result = result.sort();

// salida
console.log(result);

// anidado:
console.log(
  text
    .toLowerCase()
    .replace(/[^a-z|\s]/g, '')
    .split(' ')
    .sort()
);
