//crear una funcion cuadradodecaracteres (lado, caracter) que imprima un cuadrado de lado x lado usando el simbolo caracter.

//NO RETORNAR NADA

//Cuadradodecaracteres (3, "#")
//output:
//###
//###
//###

//cudradodecaracteres (5, "@");
// @@@@@
// @@@@@
// @@@@@
// @@@@@
// @@@@@

function cuadradodecaracteres(lado, simbolo, simbolo2) {

    for (let i = 0; i <= lado; i++) {
        let fila = "";

        for (let j = 0; j < lado; j++) {
            if (i% 2 ===0 ) {
                simbolo +=  simbolo
                
            }
            else {

            }simbolo += simbolo2
        
        }

        console.log(simbolo);
    }
}
cuadradodecaracteres(2, "#", "@");

function cuadradodecaracteres(lado, simbolo1, simbolo2) {
    for (let i = 0; i < lado; i++) {
        let fila = "";

        // Elegir qué símbolo usar en esta fila
        let simboloActual = (i % 2 === 0) 

        // Construir la fila con ese símbolo
        for (let j = 0; j < lado; j++) {
            fila += simboloActual;
        }

        console.log(fila);
    }
}

cuadradodecaracteres(2, "#", "@");