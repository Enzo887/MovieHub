import { Router } from "express"
import { MovieController } from "../controllers/movies.js"

export const routerMovie = Router()

routerMovie.get('/', MovieController.renderHome)
routerMovie.get('/about', MovieController.renderAbout)
routerMovie.get('/TMDB', MovieController.renderTMDB)

routerMovie.get('/movies', MovieController.getMovies)