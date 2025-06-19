

let colores = ["amarillo", "azul", "rojo"]

// Agrega los números 6 y 7 al final del array let numeros = [1, 2, 3, 4, 5];

let numeros = [1, 2, 3, 4, 5]
numeros.push (6,7);
console.log (numeros)

// Quita el último elemento del array let frutas = ["manzana", "pera", "kiwi"]; y muéstralo por consola.

let frutas = ["manzana", "pera", "kiwi"]
frutas.pop ("kiwi");
console.log (frutas)

// Crea un array de 5 animales y muestra cuántos elementos tiene usando .length

let animales = ["perro", "gato", "vaca", "cerdo", "pollo"]

for (let i = 0; i < animales.length; i++) {
    console.log (animales [i])
    
}

// Recorre el array let nombres = ["Ana", "Luis", "Carlos"]; y muestra cada nombre en mayúsculas.

let nombres =["ana", "luis", "carlos"];

let mayuscula = nombres.map (function (nombres) {
     return nombres.toUpperCase();
});

    console.log (mayuscula); 

//Dado el array let numeros = [1, 2, 3, 4];, crea uno nuevo con los números al cuadrado.

const numeros1 = [1, 2, 3, 4]

const duplicar = numeros1.map (num => num * 2);
console.log (duplicar)

// filter() A partir del array let edades = [15, 22, 18, 30, 17];, obtén un nuevo array solo con los mayores de edad (≥18).
    
let edades = [15, 22, 18, 30, 17]

let mayoresdeedad = edades.filter( edad => edad >= 18);
console.log (mayoresdeedad)
    
// find() En el array let usuarios = [{nombre: "Ana", id: 1}, {nombre: "Luis", id: 2}], encuentra el usuario con id === 2.
    
let usuarios = [{nombre: "Ana", id: 1}, {nombre: "Luis", id: 2}]

let resultado = usuarios.find(usuario => usuario.id === 2);
console.log (resultado)

// Usa .some() para verificar si al menos un número del array [4, 6, 9, 12] es impar.

const numeros3 = [4, 6, 9, 12] 

let resultado2 = numeros3.some(number  => {
    return (number % 2 !== 0);
})
  console.log (resultado2)

  // Usa .every() para comprobar si todos los elementos del array [10, 20, 30] son mayores que 5.

  