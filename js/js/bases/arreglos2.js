
let juegosDePelota = ['Baloncesto', 'Baseball', 'Football', 'Americano' ];
console.log('Largo:', juegosDePelota.length);

let primero = juegosDePelota [0];
let ultimo = juegosDePelota [juegosDePelota.length -1];

console.log({primero, ultimo});

juegosDePelota.forEach( (elemento, indice, arr) => {
  console.log({elemento, indice, arr });
});


let nuevalongitud = juegosDePelota.push ('Voleibol');
console.log({nuevalongitud, juegosDePelota});


nuevalongitud = juegosDePelota.unshift('WaterPolo');
console.log({nuevalongitud, juegosDePelota});


let juegoBorrado = juegosDePelota.pop()
console.log({ juegoBorrado,juegosDePelota });