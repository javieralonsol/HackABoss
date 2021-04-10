'use strict';

const timeElement = document.querySelector('h1');
timeElement.style.height = '190px';

document.querySelector('h2').outerHTML = `<h2></h2>
  <h3 style="line-height:50px">
    <button style="background:transparent; border:0; cursor:pointer; font-size: 34px; outline: 0; vertical-align: 10px;">🔔</button> <span id="alarmElement"></span>
  </h3>`;

const greetingElement = document.querySelector('h2');
greetingElement.style.height = '100px';

const alarmButton = document.querySelector('button');
const alarmElement = document.querySelector('#alarmElement');
const bodyElement = document.querySelector('body');

function padLeft(text, maxLength, symbol) {
  return symbol.repeat(maxLength - text.toString().length) + text;
}

function updateClock() {
  const time = new Date();
  const twoPoints = time.getSeconds() % 2 ? ':' : ' ';
  const getHours = padLeft(time.getHours(), 2, '0');
  const getMinutes = padLeft(time.getMinutes(), 2, '0');
  const getSeconds = padLeft(time.getSeconds(), 2, '0');

  // hora
  timeElement.textContent = getHours + twoPoints + getMinutes + twoPoints + getSeconds;

  // saludo
  greeting(getHours);

  // alarma
  checkAlarm(getHours, getMinutes, getSeconds);
}

function greeting(hour) {
  let classGreeting = ['night', 'BUENAS NOCHES'];

  if (hour < 13) {
    classGreeting = ['morning', 'BUENOS DIAS'];
  } else if (hour < 20) {
    classGreeting = ['afternoon', 'BUENAS TARDES'];
  }

  bodyElement.setAttribute('class', classGreeting[0]);
  greetingElement.textContent = classGreeting[1];
}

function checkAlarm(hours, minutes, seconds) {
  const alarmTextContent = alarmElement.textContent.trim().replace(/\s\s+/g, ' ');
  if (alarmTextContent) {
    for (const i of alarmTextContent.split(' ')) {
      if (i === hours + ':' + minutes && seconds === '00') {
        new Audio('../media/alarm.mp3').play();
      }
    }
  }
}

function clickNewAlarm() {
  const newAlarm = prompt('Introduce la hora (HH:MM)');
  if (newAlarm) {
    if (!newAlarm.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/)) {
      alert(newAlarm + ' no es una hora válida');
    } else {
      if (alarmElement.textContent.indexOf(newAlarm) !== -1) {
        alert(`Ya hay una alarma a esa hora (${newAlarm})`);
      } else {
        alarmElement.innerHTML += ` <a href="#alarm" onclick="if(confirm('¿Deseas eliminar esta alarma?'))this.remove(); return false" style="color:#01caf7; display:inline-block; text-decoration:none">${newAlarm}</a>`;
      }
    }
  }
}

updateClock();

window.setInterval(updateClock, 1000);

alarmButton.addEventListener('click', clickNewAlarm);
