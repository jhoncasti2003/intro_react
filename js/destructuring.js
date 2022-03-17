// In this exercise, the destructuring of attributes is carried out.

const Persona1 = {
    nombre: 'Jhon',
    apellido: 'Castiblanco',
    edad: 33,
    genero: 'M'
}

const { nombre, apellido } = Persona1;
console.log(`El nombre de la persona es: ${ nombre } y el apellido es: ${ apellido }`)
