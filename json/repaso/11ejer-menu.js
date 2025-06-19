// crear un objeto menu con propiedades como opcion1, opcion2, etc, donde cada valor sea un string
// descriptivo (eje:"guardar"), luego, usar un bucle for .. in para mostrar las opciones
// en consola con el formato
// "[key": [valor]" (eje: "opcion1: guardar")
// si el valor incluye la palabra salir, añadir "(x)"al final

const menu = {
    opcion1: "guardar",
    opcion2: "cargar",
    opcion3: "salir"
}
function mostrarmenu(obj) {
    
    for (const key in obj) {
    
      if (obj [key] === "salir") {
        console.log(key + ":", obj[key]," (x)");
      } else {
        console.log(key + ":", obj[key]);
      }
}
}
    
mostrarmenu(menu)