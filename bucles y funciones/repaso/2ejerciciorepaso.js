// crear una funcion evaluarnumero(num) que retorne
// "positivo y par" 
// "positivo e impar"
// "negativo"
// "cero"


function evaluarnumero(num) {
    if (num === 0) {
        return "cero";
    }
    else if (num % 2 === 0 && num > 0) {
        return "positivo y par";

    } else if (num > 0 && !(num % 2 === 0)) {
        return "positivo e impar";
    } else if (num < 0) {
        return "negativo";
    }
}
console.log(evaluarnumero(0));
console.log(evaluarnumero(-7));
console.log(evaluarnumero(4));
console.log(evaluarnumero(7));