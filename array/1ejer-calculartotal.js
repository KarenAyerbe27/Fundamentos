// calcular total a pagar teniendo en cuenta precio y cantidad 

const carrito = [
    { producto: "camisa", precio: 20, cantidad: 2 },
    { producto: "pantalon", precio: 30, cantidad: 1 }

]

const totalapagar = carrito.reduce(
  (acc, currentValue) => acc + currentValue.precio * currentValue.cantidad, 0);

console.log(totalapagar);

