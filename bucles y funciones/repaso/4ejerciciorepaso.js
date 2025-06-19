// crear una funcion esprimo(num) que retorne true si el numero es primo (solo divisble por 1 y si mismo) y false si no lo es 

function esprimo(num) {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;

        }
    }
    return true;
}

console.log(esprimo(2));

