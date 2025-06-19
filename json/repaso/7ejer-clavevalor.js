// crear una funcion mostrarpropiedades (obj) que itere sobre las propiedades de un objeto y muestre en consola: "[clave] : [valor] para cada uno
// mostrar propiedades (auto)
// output
// marca : "toyota"
// modelo : "corolla"
// ano 2022"

let auto = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};

for (let key in auto) { 
  console.log(key, ":", auto[key]);
}



