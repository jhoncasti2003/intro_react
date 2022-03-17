/** En este ejercicio se realiza la copia de objetos dentro de otros objetos */

const Persona1 = {
    nombre: 'Jhon',
    apellido: 'Castiblanco',
    edad: 33,
    genero: 'M'
}

const Persona2 = {
    nombre: 'Mildred',
    apellido: 'Gomez',
    edad: 33,
    genero: 'F'
}

const Familia = {
    Hombre: {...Persona1},
    Mujer: {...Persona2}
}

console.log(Familia)