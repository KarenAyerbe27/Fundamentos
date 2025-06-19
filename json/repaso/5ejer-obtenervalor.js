// crea una funcion obtenervalor (obj,key) que retorne el valor de cualquier atributo de un objeto obj usando una variable key

function obtenervalor(obj,key) {
    

    
    return obj[key];
}

const usuario = {
  nombre: "Karen",
  edad: 20,
  activo: true
};

console.log(obtenervalor(usuario, "nombre")); // "Karen"
console.log(obtenervalor(usuario, "edad"));   // 20
console.log(obtenervalor(usuario, "activo")); // true