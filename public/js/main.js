import { obtenerPeliculas } from "./api/moviesApi.js"
import { renderPelis } from "./ui/render.js"
import { mostrarLoading } from "./ui/loading.js"
import { iniciarCarousel } from "./interaction/carrusel.js"

async function iniciar(){
  try {
    mostrarLoading(true)
    const movies = await obtenerPeliculas()
    mostrarLoading(false)
    renderPelis(movies)
    iniciarCarousel()
  } catch (error) {
    console.error('Error inicializando la app')
  }
}

iniciar()



