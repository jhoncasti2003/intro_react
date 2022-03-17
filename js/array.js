
// Nuevo array con valores
const tecnologias = ['React','Java','NodeJs','Golang']


//eliminacion de eleentos del array entre la posicion 1 y 2
tecnologias.splice(1,2)
console.log(`Tecnologias ${tecnologias}`)


// adicion de un nuevo elemento al array
const tecnologias2 = [...tecnologias, 'Ruby']
console.log(`Tecnologias2 ${tecnologias2}`)


// filtrado de elemetos de un array
const nuevoArray = tecnologias2.filter((tecnologia) => {
  return tecnologia !== 'Golang'
})
console.log(`Array tecnologia2 con filter ${nuevoArray}`)


// Array tecnologias2 con Map
const nuevoArray2 = tecnologias2.map(function(tecnologia){
    if (tecnologia === 'Ruby'){
        return 'Ruby And Rais'
    }
    return tecnologia
})
console.log(`Array tecnologia con Map: ${nuevoArray2}`)