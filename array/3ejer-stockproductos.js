// dado un array de productos y un array ventas (con idproducto y cantidad), actualizar el stock restando las unidades vendidas 

const productos = [
    { id: 1, nombre: "camisa", stock: 10 },
    { id: 2, nombre: "pantalon", stock: 5 }
];

const ventas = [
    { idProducto: 1, cantidad: 3 },
    { idProducto: 2, cantidad: 2 }
]

function actualizarStock(productos, ventas) {

    ventas.forEach((venta) => {
        productos.forEach((producto) => {

            if (producto.id === venta.idProducto) {

                producto.stock -= venta.cantidad;
            }
        })

    })
    console.log(productos)
}

actualizarStock(productos, ventas)
