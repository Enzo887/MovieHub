const divLoading = document.querySelector('#loading')
const contenedorPelis = document.querySelector('#pelisApi')

export function mostrarLoading(cargar){
    divLoading.classList.toggle('d-none', !cargar)

    if(!cargar){
      contenedorPelis.classList.remove('justify-content-center')
      contenedorPelis.classList.remove('align-items-center')
    }
}