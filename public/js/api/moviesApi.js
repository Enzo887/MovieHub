export async function obtenerPeliculas() {
    const res = await fetch('/movies')
    return res.json()
}