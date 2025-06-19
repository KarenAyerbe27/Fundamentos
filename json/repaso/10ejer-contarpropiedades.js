// crear una funcion contartipopropiedades (obj, tipo) que cuente cuantas propiedades de un objeto obj son de tipo especifico 
// (ej: "string", "number")

let persona ={
    nombre: "luisa",
    edad: 30,
    activo: true,
    direccion: "calle 123"

}

function contartipopropiedades(obj, tipo) {
    let contador = 0;

   
    for (let key in obj) {
        let valor = obj[key]; 

        if (typeof valor === tipo) {
            contador++; 
        }
    }

    return contador;
}
    



console.log (contartipopropiedades(persona,"string"));
console.log (contartipopropiedades(persona,"number"));
console.log (contartipopropiedades(persona,"boolean"));