//1. Crear un metodo que me cuente cuantas letras hay en la palabra
//Output:
//contarLetras("Murcielago", "u"); //1
//contarLetras("Panda", "a"); //2
//contarLetras("Gato", "e"); //0

function contarLetras(palabra, letra){
  let contador = 0;
  
  for (let i = 0; i <= palabra.length - 1; i++) {
    if(palabra[i] === letra){
      contador += 1;
    }
  }
  return contador;
}

console.log(contarLetras("Murcielago", "u"));
console.log(contarLetras("Panda", "a"));
console.log(contarLetras("Gato", "e"));