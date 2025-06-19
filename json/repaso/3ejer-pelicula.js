// crear un objeto pelicula con:
// titulo
// año
// genero
// es favorita
// metodo mostrarinfo() que retorne: "titulo:[titulo], año: [año]"

let pelicula = {
    titulo: "rapido y furioso",
    ano: 2005,
    genero: "accion",
    esfavorita: true,

    mostrarInfo: function () {
        
        return `titulo: ${this.titulo}, ano: ${this.ano}`;
    }
};


console.log(pelicula.mostrarInfo())



