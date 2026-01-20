export async function obtenerPeliculas(sourceSelect) {
    const res = await fetch(`/movies?source=${sourceSelect.value}`)
    return res.json()
}
