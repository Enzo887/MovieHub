fetch('/movies')
      .then(res => res.json())
      .then(movies => {
        const html = movies.map(movie => {
          return `
            
                <img src="${movie.poster}" class="netflix-card rounded">

          `
        }).join('')
        document.querySelector('#pelisApi').innerHTML = html
    })
const row = document.getElementById('pelisApi');
const next = document.getElementById('nextBtn');
const prev = document.getElementById('prevBtn');

const scrollAmount = 400;

next.addEventListener('click', () => {
  row.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

prev.addEventListener('click', () => {
  row.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});
