//Aplicar un descuento del 50% si el espectador es menor de 12 años o mayor de 60.
//1. definir edad
//2. si es < 12 años, aplica al descuento
//3. si es > 60 años, aplica al descuento
//4. si no esta dentro del ranngo antes mencionado, compra a precio normal 

let edad = 65;
if (edad < 12 || edad > 60) {
	console.log("tiene el 50% de descuento");
} else {
	console.log("precio normal");
}

//Clasificar un número como "Positivo", "Negativo" o "Cero".
//1. definir numero
//2. si es < 0, es negativo
//3. si es > 0, es positivo
let numero = 7;
if (numero < 0) {
	console.log("es negativo");
} else if (numero > 0) {
	console.log("es positivo");
} else {
	console.log("es cero");
}

//Permitir acceso si el usuario es "admin" o si es "invitado" y la contraseña es "1234". 
//1. definir usuario
//2. si el usuario es admin 0 invitado, acceso permmitido.
//3. si no lo es, acceso denegado.o

let usuario = "invitado";
let contrasena = 1234;
if (usuario == "admin" || (usuario == "invitado" && contraseña == "1234")) {
	console.log("acceso permitido");
} else {
	console.log("acceso denegado")
}

//let A = true, B= false, C= true
//(!A || B) && (C || !C)
//(false || false) false 
//(true || false) true
//false && true
//false
