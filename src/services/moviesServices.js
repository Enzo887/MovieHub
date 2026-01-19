import { tmdbModel } from "../models/TMDBMovie.js"
import { localModel } from "../models/miApiMovie.js"

export async function getMovies(source){
    console.log(source)
    if(source === 'local'){
        console.log('we')
        return await localModel.getMovies()
    }
    console.log('wo')
    return await tmdbModel.getMovies()
     
}