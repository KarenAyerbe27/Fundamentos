// crear for que vaya del 1 al 5
// log que muestre el index o la i //tiene que mostrar 1,2,3,4,5
// identificamos los impares // numero%2 ===0
//suman en la variable solo los numeros impares
// mostrar el resultado 
// 3,10=3+5+7+9
// 5+7+9+11+13+15 =60
// 5+7+9+11+13+15+17+19+21=117


function sumarimpares(num, num2) {
    let sumar = 0;

    for (let i = num; i <= num2; i++) {

        if (!(i % 2 === 0)) {
            sumar += i;
        }

    };
    return sumar;
}

console.log(sumarimpares(5, 21));