const contarRegresivo = (num) => {
  let totalOmitidos = 0;
  let totalNoDivisibles = 0;
  let indicador = 0;
  let sumaomitidos = 0;

  for (let i = num; i >= 1; i--) {
    if (i % 3 !== 0) {
      let esPar = i % 2 === 0;
      if (esPar) {
        console.log((indicador + "."), i, "par");
      } else {
        console.log((indicador + "."), i, "impar");
      }
      indicador += 1;
      totalNoDivisibles += 1;

    } else {
      //Si es divisible
      console.log("Numero", i, "omitido");

      totalOmitidos += 1;
      sumaomitidos += i;
      console.log(totalOmitidos);

      if (sumaomitidos >= 100) {
      
      }
    }
  }

  console.log("Total de numeros omitidos", totalOmitidos);
  console.log("Total de numeros no divisibles es", totalNoDivisibles);
  console.log("Suma total de los números omitidos", sumaomitidos)

  return sumaomitidos;

};

suma = contarRegresivo(100);




//console.log('============');
//contarRegresivo(5);

//Mostrar un log que diga "Número n omitido"
//Contar cuantos numeros fueron omitidos y mostrar al final: "Total de numeros omitidos n"
//Contar cuantos numeros fueron omitidos y mostrar al final: "Total de numeros no divisibles es n"
//En los numeros que se muestre, indicar si es par o impar. Ejemplo:
//5 impar
//4 par
//2 par
//1 impar
//Agregar número de la iteración al inicio, desde la posición 0.
//0. 5 impar
//1. 4 par
//Numero 3 omitido
//2. 2 par
//3. 1 impar
//La función debe retornar la suma de los números omitidos
//Ejecutar la función hasta que la suma de los números omitidos sea mayor o igual a 100
