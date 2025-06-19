let veces = 10;

for (
  let index = 0; //Definir iterador
  index < veces; //Si se cumple esta condicion se repite
  index++ //Sumarle 1 al iterador
) {
  //console.log(`${index} Hola`);
}

for (let index = 0; index < 5; index++) {
  if(index === 0){
    //console.log(`*`);
  }
  if(index === 1){
    //console.log(`**`);
  }
  if(index === 2){
    //console.log(`***`);
  }
}

for (let index = 0; index < 10; index++) {
  let texto = "";
  
  for (let subindex = 0; subindex < (index + 1); subindex++) {
    texto = texto + '*';
  }
  console.log(texto);
}

//       *
//      ***
//     *****
//    *******
//   *********
//   *********
//    *******
//     *****
//      ***
//       *

let tamaño = 5; // Puedes cambiar este número

// Parte de arriba
for (let index = 0; index < tamaño; index++) {
  let linea = "";

  for (let espacio = 0; espacio < tamaño - index - 1; espacio++) {
    linea += " ";
  }

  for (let estrella = 0; estrella < 2 * index + 1; estrella++) {
    linea += "*";
  }

  console.log(linea);
}

// Parte de abajo
for (let index = tamaño - 1; index >= 0; index--) {
  let linea = "";

  for (let espacio = 0; espacio < tamaño - index - 1; espacio++) {
    linea += " ";
  }

  for (let estrella = 0; estrella < 2 * index + 1; estrella++) {
    linea += "*";
  }

  console.log(linea);
}


for (let fila = 0; fila < 8; fila++) {
  let linea = "";

  for (let columna = 0; columna < 8; columna++) {
    if ((fila + columna) % 2 === 0) {
      linea += "□";
    } else {
      linea += "■";
    }
  }

  console.log(linea);
}


     




    
