const divLoading = document.querySelector('#loading')
const contenedorPelis = document.querySelector('#pelisApi')

export function mostrarLoading(cargar){
    divLoading.classList.toggle('d-none', !cargar)
    // divLoading.classList.toggle('d-block', cargar)   

  contenedorPelis.classList.toggle('justify-content-center', cargar)
  contenedorPelis.classList.toggle('align-items-center', cargar)
}