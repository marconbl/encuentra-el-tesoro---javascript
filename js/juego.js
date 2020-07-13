/// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './ayuda.js';


// Coordinadas del tesoro
const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// Controlador de clicks
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20 ) {
    alert(`Econtraste el tesoro en ${clicks} clicks!`);
    location.reload();
  }
});