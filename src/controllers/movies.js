import {getMovies} from '../services/moviesServices.js'

export class MovieController{

    static async renderHome(req, res){
        res.render('movies')
    }

    static async renderAbout(req, res){
        res.render('about')
    }

    static async renderTMDB(req, res){
        res.render('TMDB')
    }

    static async getMovies(req, res){
        try {
            const {source} = req.query
            const movies = await getMovies(source)
            res.json(movies)
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener películas' })
        }

    }
}