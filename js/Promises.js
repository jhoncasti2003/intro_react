const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})
