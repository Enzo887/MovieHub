export async function obtenerPeliculas() {
    const sourceSelect = document.querySelector('#apiSelect')
    const res = await fetch(`/movies?source=${sourceSelect.value}`)
    return res.json()
}

// export async function obtenerConfig(){
//     const response = await fetch('https://api.themoviedb.org/3/configuration')
// }