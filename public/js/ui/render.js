const contenedorPelis = document.querySelector('#pelisApi')

export function renderPelis(movies, crearCard){
    contenedorPelis.innerHTML = ''
    
    movies.forEach(movie => {
        contenedorPelis.appendChild(crearCard(movie))
    });
}
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export function crearCardTMDB(movie){
    const img = document.createElement('img')
    img.src = IMAGE_BASE_URL + movie.poster_path
    img.alt = movie.title
    img.className = 'netflix-card rounded'
    return img
}

export function crearCardApiLocal(movie){
    const img = document.createElement('img')
    img.src = movie.poster
    img.alt = movie.title
    img.className = 'netflix-card rounded'
    return img
}

