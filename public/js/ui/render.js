const contenedorPelis = document.querySelector('#pelisApi')

export function renderPelis(movies){
    contenedorPelis.innerHTML = ''
    movies.forEach(movie => {
        contenedorPelis.appendChild(crearCardPelicula(movie))
    });
}

function crearCardPelicula(movie){
    const img = document.createElement('img')
    img.src = movie.poster
    img.alt = movie.title
    img.className = 'netflix-card rounded'

    return img
}
