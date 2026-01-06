export class MovieModel{
    static async getMovies(){
        const response = await fetch('https://rest-api-deploy-w3sz.onrender.com/movies')
        const movies = await response.json()
        
        return movies
    }
}