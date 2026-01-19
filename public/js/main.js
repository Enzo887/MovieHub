import { obtenerPeliculas } from "./api/moviesApi.js"
import { renderPelis } from "./ui/render.js"
import { mostrarLoading } from "./ui/loading.js"
import { iniciarCarousel } from "./interaction/carrusel.js"

const sourceSelect = document.querySelector('#apiSelect')


async function cargarPeliculas(){
  try {
    mostrarLoading(true)
    const movies = await obtenerPeliculas()
    renderPelis(movies)
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


