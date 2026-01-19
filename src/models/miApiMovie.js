export class MovieModel{
    static async getMovies(){
        const response = await fetch('https://api.themoviedb.org/3/movie/11')
        const movies = await response.json()
        
        return movies
    }
}