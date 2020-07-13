// Generador de numero aleatorio
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  // Obtiene la distancia entre dos puntos
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
  // Devuelve un string dependiendo de las distancias.
  let getDistanceHint = distance => {
    if (distance < 30) {
      return "Muy cerca!";
    } else if (distance < 40) {
      return "Ya casi lo encuentras!";
    } else if (distance < 60) {
      return "Falta poco";
    } else if (distance < 100) {
      return "Cerca";
    } else if (distance < 180) {
      return "Lejos";
    } else if (distance < 360) {
      return "Bastante lejos";
    } else {
      return "Muy lejos!";
    }
  }