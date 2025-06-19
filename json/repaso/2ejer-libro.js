// crear un objeto libro con:
// titulo
// autor
// año de publicacion
// metodo mostrarinfo() que imprima el libro (titulo)fue escrito por (autor) en (año) 

let libro = {
  titulo: "Don Quijote de la Mancha",
  autor: "Miguel de Cervantes",
  anopublicacion: 1605,

  mostrarInfo: function () {
    console.log(`El libro "${this.titulo}" fue escrito por ${this.autor} en ${this.anopublicacion}.`);
  }
};


libro.mostrarInfo();