import {MovieModel} from '../models/movie.js'

export class MovieController{

    static async renderHome(req, res){
        res.render('index',{
            nombre : 'Enzo'
        })
    }

    static async getMovies(req, res){
        const movies = await MovieModel.getMovies()
        return res.json(movies)
    }
}