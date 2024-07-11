
function saludar(nombre) {
    console.log('Hola' + nombre)

}
const saludar2 = function(nombre){
    console.log('Hola'+ nombre);
}


saludar( 'July');
saludar2('Bellota')
 

function sumar(a, b) {
    return a + b
    
}

console.log(sumar(1,3));

const getAleatorio = ()=> Math.random();

console.log(getAleatorio());