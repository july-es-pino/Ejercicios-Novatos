let personaje = {
  nombre: 'Serena Tsukino',
  codeName: 'Sailor Moon',
  vive: true,
  edad: 14,

  coords: {
    lat: 35.6895,
    lng: 139.69171
  },

  amigas: ['Amy Mizuno', 'Rei Hino', 'Makoto Kino'],
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Edad', personaje.edad );

console.log('Coors', personaje.coords);
console.log('No.Amigas', personaje.amigas.length);
console.log('ultima amiga', personaje.amigas [ personaje.amigas.length -1]);

const x = 'vive';
console.log('Vive', personaje [x]);