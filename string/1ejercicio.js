// crea una funcion donde formatee un nombre
// convertir la primera en mayuscula y el resto minuscula
// eliminar espacios extras al inicio y final



function formatearNombre(nombre) {
  nombre = nombre.trim(); 

  let resultado = "";

  for (let i = 0; i < nombre.length; i++) {
    if (i === 0) {
      
      resultado += nombre[i].toUpperCase();
    } else {
     
      resultado += nombre[i].toLowerCase();
    }
  }

  console.log(resultado);
}

formatearNombre("   juan   "); ...


//nombre = nombre.trim();
// return nombre.charAt(0).toUpperCase() + nombre.slice (1).toLowerCase();

//console.log(formatearNombre("  juan  "))