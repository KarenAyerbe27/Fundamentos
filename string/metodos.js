let nombre = "juanisn-n-n";

console.log(nombre.toUpperCase()); // "JUAN"
console.log(nombre.toLowerCase()); // "juan"
console.log(nombre.length);
console.log(nombre.charAt(0)); // "J"
console.log(nombre.indexOf("n")); // 3 //Busca la primera ocurrencia
console.log(nombre.lastIndexOf("n")); // 8 //Busca la última ocurrencia
console.log(nombre.includes("-")); // true
console.log('|' + nombre.trim() + '|'); // "Juanisn-n-n" (elimina espacios al inicio y al final)

console.log(nombre.slice(0, 5)); // "Juanis"

let animal = "Hola perro perro";
console.log(animal.replace("perro", "gato")); // "gato"
console.log(animal.replaceAll("perro", "gato")); // "Hola gato gato"

const nombres = "Juan, Pedro, Maria, Ana";
console.log(nombres.split(", ")); // ["Juan", "Pedro", "Maria", "Ana"]