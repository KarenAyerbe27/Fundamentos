//CREAR UNA FUNCION generarpatron(n) que genere un patron como el siguiente para n = 3:
function generarpatron(num) {
    for (let i = 1; i <= num; i++) {
        let linea = "";

        for (let j = 1; j <= i; j++) {
            linea = linea + i;

        }
        console.log(linea);
    }
}
generarpatron(5)
