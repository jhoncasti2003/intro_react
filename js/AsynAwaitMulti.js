const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'

const consultarApi = async () => {
	const respuestas = await Promise.all([fetch(url), fetch(url2)])
    const [respuesta1, respuesta2] = await respuestas;
    const datos = await respuesta1.json()
    const datos2 = await respuesta2.json()
    console.log(datos)
    console.log(datos2)
}

consultarApi()
