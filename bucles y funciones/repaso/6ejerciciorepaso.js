//contar letras de la contrasena
//la longitud de la contrasena >=6
//validar que al menos tenga un numero
//buscarLetraA("Hola")
//Output: 3

function validarcontrasena(contrasena) {
    let validarlongitud = false;

    //validar longitud de la contrasena
    for (let i = 0; i < 6; i++) {
        if (i >= 5 && contrasena[i] !== undefined) {
            validarlongitud = true;
        }
    }

    let validarnumero = false;

    //validar que al menos tenga 1 numero

    for (let i = 0; i < 100; i++) {
        if (parseInt(contrasena[i]) >= 0) {
            validarnumero = true;
        }
    }

    return validarlongitud === true && validarnumero === true;

}

function buscarLetraA(texto) {
    let posicion = texto.indexOf("a")

    if (posicion === -1) {
        return "no existe";

    } else {
        return posicion;
    }

}

console.log(validarcontrasena("abc123"));
console.log(validarcontrasena("hola"));
console.log(validarcontrasena("aedrf5"));
console.log(validarcontrasena("aaaaaa"));
console.log(buscarLetraA("hola"));







