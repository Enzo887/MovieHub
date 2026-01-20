import { obtenerPeliculas } from "./api/moviesApi.js"
import { renderPelis, crearCardApiLocal, crearCardTMDB } from "./ui/render.js"
import { mostrarLoading } from "./ui/loading.js"
import { iniciarCarousel } from "./interaction/carrusel.js"

const sourceSelect = document.querySelector('#apiSelect')


async function cargarPeliculas(){
  try {
    mostrarLoading(true)
    const movies = await obtenerPeliculas(sourceSelect)

    const crearCard = sourceSelect.value === 'local' ? crearCardApiLocal : crearCardTMDB
    renderPelis(movies, crearCard)
    
    iniciarCarousel()
  } catch (error) {
    console.error('Error inicializando la app')
  }finally{
    mostrarLoading(false)
  }
}

cargarPeliculas()
sourceSelect.addEventListener('change', () => {
    cargarPeliculas()
})


