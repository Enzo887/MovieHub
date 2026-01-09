fetch('https://rest-api-deploy-w3sz.onrender.com/movies')
      .then(res => res.json())
      .then(movies => {
        const html = movies.map(movie => {
          return `
            
                <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                  <img src="${movie.poster}" class="img-fluid rounded netflix-card">
                </div>

          `
        }).join('')
        document.querySelector('#pelisApi').innerHTML = html
    })

    // <article data-id="${movie.id}">
    //           <h2>${movie.title}</h2>
    //           <img src="${movie.poster}" alt="${movie.title}">
    //           <p>${movie.year}</p>

    //           <button>Eliminar</button>
    //         </article>