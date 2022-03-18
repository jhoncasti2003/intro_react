const url = 'https://jsonplaceholder.typicode.com/comments'

const consultarApi = async () => {
	const respuesta = await fetch(url)
    const datos = await respuesta.json()
    datos.forEach(datos => {
        console.log(datos)
    })
}

consultarApi()
