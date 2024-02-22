/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Declaro las variables//
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palos = [1, 2, 3, 4];
  let iconos = ["♠️", "♥️", "♦️", "♣️"];

  //función para generar una carta aleatoria
  function generarCarta() {
    //Hago los arrais aleatorios//
    let randomPaloIndex = Math.floor(Math.random() * palos.length);
    let randomNumeroIndex = Math.floor(Math.random() * numbers.length);

    //Indico los indices//
    let randomPalo = palos[randomPaloIndex]; //pregunta para mentoria, no se porque me funciona el -1
    let randomNumero = numbers[randomNumeroIndex];
    let iconoPalo = iconos[randomPalo];

    //Enlazo con el HTML//
    document.querySelector(".paloarriba").innerHTML = iconoPalo;
    document.querySelector(".numerocentro").innerHTML = randomNumero;
    document.querySelector(".paloabajo").innerHTML = iconoPalo;
  }

  // Hago la primera carta cuando se carga la página
  generarCarta();

  // Se carga una carta aleatoria cada 10 segundos (está en milisegundos)
  setInterval(generarCarta, 10000);
};
