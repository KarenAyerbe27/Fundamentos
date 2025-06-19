// crear una funcion que se llame tabla de multiplicar (numero) que imprima la tabla de multiplicar del numero ingresado
// tabla multiplicar (5)
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// tabla multiplicar (5, 15)
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 
// 5 x 9 = 45
// 5 x 10 = 50
// 5 x 11 = 55
// 5 x 12 = 60 
// 5 x 13 = 65
// 5 x 14 = 70
// 5 x 15 = 75

function tablaMultiplicar(numero, numero1) {


    for (let i = 1; i < numero1; i++) {

        console.log(numero, "x", i, "=", (numero * i))

    }

}
tablaMultiplicar(5, 20)

// crear una funcion contarpares (inicio, fin) que cuente cuantos numeros pares hay entre inicio y fin (incluyendolos si son pares)

function contarpares(inicio, fin) {

    let contar = 0

    for (let i = inicio; i <= fin; i++) {

        if (i % 2 === 0) {
            contar++
        }
    }

    console.log(contar);

}

contarpares(1, 10)

// crear ujna funcion que imprima un triangulo numerico de la altura indicada

function triangulonumerico(filas) {
    let resultado = "";

    for (let i = 1; i <= filas; i++) {
        if(1 === 1){
            resultado += 1;
        }else {

        }
    
        
    }
    
}
