// mostrar un producto pr su nombre y mostrar sus detalles, si no existe mostrar no encontrado

const productos= [
    {id: 1, nombre: "laptop", precio: 1000},
    {id: 2, nombre: "mouse", precio: 20 }
]

let nombreBuscado = "laptop";


const mostrarproducto = productos.find((productos) => productos.nombre === nombreBuscado);
if (mostrarproducto) {
  console.log("Producto encontrado:", mostrarproducto);
} else {
  console.log("Producto no encontrado");
}


console.log(mostrarproducto);