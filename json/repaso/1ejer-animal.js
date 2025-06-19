//Crear un objeto de un animal
//1. Mostrar el nombre del animal
//2. Mostrar la edad del animal
//3. Crear una funcion dentro del objeto que muestre un mensaje con el nombre y la edad del animal


let animal = {
    nombre: "zeus",
    edad: 5,

    mostrarInformacion: function () {

        console.log(`el animal se llama ${this.nombre} y tiene ${this.edad} anos.`);
        

    }
};


animal.mostrarInformacion();