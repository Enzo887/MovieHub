import { tmdbModel } from "../models/TMDBMovie.js"
import { localModel } from "../models/miApiMovie.js"

export async function getMovies(source){
    if(source === 'local'){
        return await localModel.getMovies()
    }
    return await tmdbModel.getMovies()
     
}