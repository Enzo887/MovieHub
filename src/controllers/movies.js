import {MovieModel} from '../models/movie.js'

export class MovieController{

    static async renderHome(req, res){
        res.render('index')
    }

    static async renderAbout(req, res){
        res.render('about')
    }

    static async renderTMDB(req, res){
        res.render('TMDB')
    }

    static async getMovies(req, res){
        const movies = await MovieModel.getMovies()
        return res.json(movies)
    }
}