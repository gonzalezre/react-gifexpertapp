


export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NJU0TKEjOjXpBV3qCMj7a52y7sI2zZA1&q=${encodeURI(category)}&limit=10`;
    const resp =  await fetch( url );
    const { data } =  await resp.json(); // obteniendo solo el nodo de data!!
    
    const gifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
        }
    })

    return gifs; //retorna una promesa que contiene una coleccion de las imagenes

  }