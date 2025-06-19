// crear una funcion validarusario(usuario) que verifique si un objeto usuario tiene las propiedades obligatorias. 
// El nombre tengas mas de 2 letras, la edad sea => 0, y este activo. Retornar true si es valido y false si no

const usuario1= {nombre: "Ana", edad: 25, activo: true};
const usuario2= {nombre: "carlos", edad: 0};

function validarUsuario(usuario) {

  if ( usuario.nombre.length >= 2 &&  usuario.edad > 0 && usuario.activo) {
    return true;

  } else {
    return false;
  }
}


console.log(validarUsuario(usuario1)); 
console.log(validarUsuario(usuario2)); 

