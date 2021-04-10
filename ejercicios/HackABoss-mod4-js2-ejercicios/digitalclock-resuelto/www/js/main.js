"use strict";

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

function formatNumber(numberToFormat) {
  return numberToFormat > 9 ? `${numberToFormat}` : `0${numberToFormat}`;
}

function getGreeting(hour) {
  if (hour >= 6 && hour < 12) {
    return { saludo: "BUENOS DIAS", class: "morning" };
  } else if (hour >= 12 && hour < 23) {
    return { saludo: "BUENAS TARDES", class: "afternoon" };
  } else {
    return { saludo: "TOQUE DE QUEDA", class: "night" };
  }
}

function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const separator = seconds % 2 === 0 ? ":" : " ";

  h1.textContent = `${formatNumber(hour)}${separator}${formatNumber(
    minutes
  )}${separator}${formatNumber(seconds)}`;

  const greeting = getGreeting(hour);

  h2.textContent = greeting.saludo;
  body.setAttribute("class", greeting.class);
}

updateClock();
setInterval(updateClock, 1000);
