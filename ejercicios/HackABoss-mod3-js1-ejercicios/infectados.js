'use strict';

/*
  Quiero hacer una funcion que admita de parametro un array de pacientes
  La funcion devuelve los que estan infectados al dia siguiente
  Pero no no modifica los que estaban infectados originalmente
  Si alguien esta infectado, al dia siguiente estan infectados los que estan justo al lado

  Otro virus
  Infecta igual pero el que estaba inicialmente infectado se cura
*/

const patients = [true, false, true, false, false, false, true, true];
const final = [true, true, true, true, false, true, true, true];
const infected2 = [false, true, false, true, false, true, false, false];

function infectedTomorrow(theArray) {
  const theArrayCopy = [...theArray];
  for (let i = 0; i < theArray.length; i++) {
    if (theArray[i]) {
      if (i === 0) {
        theArrayCopy[i + 1] = true;
      } else if (i === theArray.length - 1) {
        theArrayCopy[i - 1] = true;
      } else {
        theArrayCopy[i - 1] = true;
        theArrayCopy[i + 1] = true;
      }
    }
  }
  return theArrayCopy;
}

function infectedTomorrowCuring(theArray) {
  let infectedTomorrowResult = infectedTomorrow(theArray);
  for (let i = 0; i < theArray.length; i++) {
    if (theArray[i]) {
      infectedTomorrowResult[i] = false;
    }
  }
  return infectedTomorrowResult;
}

const infectedTomorrowResult = infectedTomorrow(patients);
console.log(infectedTomorrowResult, final.toString() === infectedTomorrowResult.toString());

const infectedTomorrowResultCuring = infectedTomorrowCuring(patients);
console.log(infectedTomorrowResultCuring, infected2.toString() === infectedTomorrowResultCuring.toString());
