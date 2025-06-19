// usa destructuracion para extraer nombre y precio
// crea una funcion formatearproducto que retorne "producto: (nombre), precio $(precio)"


const producto = {
    id: 1,
    nombre: "laptop",
    precio: 999.99,
    stock: 10,
}

const { nombre, precio } = producto;
console.log(nombre, precio);


function formatearproducto() {
    return `nombre: ${this.nombre}, precio: ${this.precio}`;

}
