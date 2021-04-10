/**
 * #############################
 * ##  E J E R C I C I O   2  ##
 * #############################
 *
 * La constante data simula el contenido de un fichero ".csv". Podemos imaginar
 * que se trata de una tabla con filas y columnas. La primera fila de este tipo
 * de ficheros indica el nombre de cada columna.
 *
 * Por ejemplo, la primera columna se llama "id". Como podéis ver cada fila
 * tiene un "id" distinto: 142, 143, 144, etc. Lo mismo pasa para las demás
 * columnas. Por tanto, podemos entender que cada fila es una entidad de la
 * tabla, en este caso un piso.
 *
 * El objetivo de este ejercicio es convertir la información almacenada en data
 * en un array en el que cada posición sea un piso. El resultado final debería
 * ser algo similar a:
 *
 *    [
 *      ["142", "88", "12", "3", "1", "true", "false"],
 *      ["143", "120", "10", "4", "2", "false", "false"],
 *      ["144", "46", "18", "1", "1", "true", "true"],
 *      ["145", "52", "8", "1", "1", "true", "true"],
 *      ["146", "60", "3", "1", "1", "true", "true"],
 *      ["147", "140", "4", "4", "2", "true", "true"],
 *      ["148", "160", "9", "5", "3", "true", "true"],
 *      ["149", "60", "11", "1", "1", "false", "true"]
 *    ]
 *
 * Tips:
 *
 *  - El método "nombreString.trim()" elimina los espacios en blanco al principio
 *    y al final del array. No elimina los espacios que haya de por medio.
 *
 *    '    ¡Hola ola caracola!    '.trim() ---> '¡Hola ola caracola'
 *
 *  - Si queremos dividir un string donde haya un salto de línea podemos utilizar
 *    "nombreString.split('\n')".
 *
 */
'use strict';

let data = `  "id", "m2", "antiguedad", "habitaciones", "baños", "amueblado", "ascensor"
142, 88, 12, 3, 1, true,  false
143, 120, 10,  4, 2, false,  false
144, 46, 18,  1, 1, true,  true
145, 52, 8,  1, 1, true,  true
146, 60, 3,  1, 1, true,   true
147, 140, 4,  4, 2, true,   true
148, 160, 9,  5, 3, true,  true
149, 60, 11,  1, 1, false,  true
   `;

/* ######################
 * ##  M É T O D O  1  ##
 * ######################
 *
 * aprovechando los saltos de línea
 */

// elimino espacios y saltos de línea al principio y fin
const dataFormated = data.trim();

// divido por salto de línea
const dataArray = dataFormated.split('\n');

// inicializo el array de resultado vacío
const resultArray = [];

// paso cada línea
for (let line = 1; line < dataArray.length; line++) {
  // divido cada linea por la ','
  const comaArray = dataArray[line].split(',');

  // creo un array temporal vacío
  const tempArray = [];

  // paso cada coma
  for (let comma = 0; comma < comaArray.length; comma++) {
    // añado el valor al array temporal
    tempArray.push(comaArray[comma].trim());
  }

  // añado el array temporal al de resultado
  resultArray.push(tempArray);
}

console.log(resultArray);

/* ######################
 * ##  M É T O D O  2  ##
 * ######################
 *
 * sabiendo que son 7 elementos en cada array
 *  */

const dataFormated2 = data
  .trim() // elimino espacios y saltos de línea al principio y fin
  .toLowerCase() // a minúsculas
  .replace(/"[^"]*",?/g, '') // elimino los elementos que están entre comillas y sus comas
  .replaceAll('\n', ',') // cambio los saltos de línea por comas
  .replaceAll(' ', '') // elimino espacios
  .split(','); // divido por las comas

// inicializo el array de resultado
const resultArray2 = [];
// inicializo el array temporal
let tempArray = [];

// paso por cada elemento igonrando el primero (que es un campo vacío)
// he dejado ese primer elemento apropósito para evitar el resto % 7 === 0 en la posición 0
for (let index = 1; index < dataFormated2.length; index++) {
  // añado cada elemento al array temporal
  tempArray.push(dataFormated2[index]);

  // cada 7 elementos
  if (index % 7 === 0) {
    // añado el array temporal al array resultado
    resultArray2.push(tempArray);

    // y vacío el array temporal
    tempArray = [];
  }
}

console.log(resultArray2);
