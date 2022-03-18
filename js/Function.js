// Function declaration - Puedes llamar la funcion antes ya que js realiza hosting construyendo primero las funciones y lugo el llamdo
function sumar(numero1, numero2){
    console.log( numero1 + numero2 )
}

sumar(10,3)


//Function Expression -> en Function expression no puedes mandar llamar la funcion antes de declararla
const restar = function(numero1, numero2){
    console.log( numero1 - numero2 )
}

restar()


//Arrow Function
const dividir = (numero1, numero2) => {
     return (numero1 / numero2)
}
const resultado = dividir(10,5)
console.log(resultado)


