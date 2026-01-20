export class tmdbModel{
    static async getMovies(){
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1',{
            headers:{
                Authorization: `Bearer ${process.env.TOKEN_TMDB}`
            }
        })
        const movies = await response.json()

        return movies.results
    }
    // export async function obtenerConfig(){
//     const response = await fetch('https://api.themoviedb.org/3/configuration')
// }
}