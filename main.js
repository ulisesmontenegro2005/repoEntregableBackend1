class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`);
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
        console.log(this.mascotas);
    }

    countMascotas() {
        console.log(this.mascotas.length);
        return this.mascotas.length;
    }

    addBook(libro) {
        this.libros.push(libro)
        console.log(this.libros);
    }

    getBookNames() {
        let arrNames = [];
        let names = this.libros.forEach((obj) => {
            arrNames.push(obj.nombre)
        })
        console.log(arrNames);
    }
}

let uli = new Usuario("Ulises", "Montenegro");

uli.getFullName();

uli.addMascota("Uma");

uli.countMascotas();

uli.addBook({ nombre: "libro1", autor: "jorge" });

uli.addBook({ nombre: "libro2", autor: "juan" });

uli.addBook({ nombre: "libro3", autor: "welin" });

uli.getBookNames();
