//crea un objeto usuario con: nombre, edad y email
// elimina el atributo email usando delete
// añade un nuevo atributo activo (boolean)

let usuario = {
    nombre: "Maria",
    edad: 20,
    email: "maria@gmail.com",

    
}

delete usuario.email;

usuario.activo= true;

console.log (usuario)