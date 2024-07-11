

const regresaTrue = () => {
    console.log( 'Regresa True');
    return;true
}

const regresaFalse = () => {
    console.log( 'Regresa False');
    return; false
}


console.warn ('Not o la negacion')
console.log(true);
console.log(!true);
console.log(!false)



console.warn ('And'); // solo resulta true, si todos los valores son verdaderos
console.log (true && true) // verdadero
console.log (true && !false) //resulta falso


console.warn ('OR');//true
console.log (true || false );
console.log (false || false);

console.log (regresaTrue() || regresaFalse())
