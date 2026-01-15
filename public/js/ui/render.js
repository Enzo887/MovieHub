const contenedorPelis = document.querySelector('#pelisApi')

export function renderPelis(movies){
    contenedorPelis.innerHTML = ''
    movies.forEach(movie => {
        contenedorPelis.appendChild(crearCardPelicula(movie))
    });
}
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

function crearCardPelicula(movie){
    const img = document.createElement('img')
    img.src = IMAGE_BASE_URL + movie.poster_path
    img.alt = movie.title
    img.className = 'netflix-card rounded'

    return img
}
