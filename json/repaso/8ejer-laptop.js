// añade la propiedad marca con valor "HP"
// reduce el precio en un 10%
// elimina la propiedad stok

let producto = {
    nombre: "laptop",
    precio: 1200,
    stok: 5

}

producto.marca = "HP";

producto.precio = producto.precio * (10 / 100);

delete producto.stok;

console.log (producto)


