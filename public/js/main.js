import { obtenerPeliculas } from "./api/moviesApi.js"
import { renderPelis } from "./ui/render.js"
import { iniciarCarousel } from "./interaction/carrusel.js"

async function iniciar(){
  const movies = await obtenerPeliculas()
  renderPelis(movies)
  iniciarCarousel()
}

iniciar()



