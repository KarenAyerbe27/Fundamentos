// Crea una función que reciba un número y muestre en pantalla todos los números del 1 hasta ese número.

function contarnumeros(num) {

    for (let i = 1; i <= num; i++) {
   console.log (i)
        
    }
    
}
contarnumeros(10);

//Haz una función que reciba una palabra y muestre cada letra por separado, una por línea.

function mostrarpalabra(letras) {
    
    for (let i = 0; i < letras.length; i++) {
       console.log (letras [i])
        
    }
}
mostrarpalabra("karen");

// Crea una función que reciba un símbolo y una cantidad, y dibuje una línea horizontal con ese símbolo repetido

function dibujarlinea(simbolo, cantidad) {

    let linea = "";

    for (let i = 0; i < cantidad; i++) {

            linea += simbolo;
            
        }
        console.log (linea);
    }


dibujarlinea("$", 3)

// Crea una función que reciba un número y sume todos los números desde 1 hasta ese número. Al final, debe mostrar el resultado total.

function sumarhasta(num) {
    let suma = 0;

    for (let i = 1; i < num; i++) {
        suma += i;
        
    }
    console.log (suma)
}

sumarhasta (10)