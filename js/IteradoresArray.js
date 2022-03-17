const tecnologias = ['React','Java','NodeJs','Golang']

// lista cada elemento (no crea nuevo arreglo)
const array1 = tecnologias.forEach(function(tech){
    return tech
})

// a manera de explicacion se genera este console.log para validar que no genera array y devuelve undefined
console.log(array1)

// manipula cada elemento (generando un nuevo arreglo)
const array2 = tecnologias.map(function(tech){
   return `LA tecnologia es: ${tech }`
})

console.log(array2)

