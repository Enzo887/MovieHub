export function iniciarCarousel(){
    const row = document.getElementById('pelisApi');
    const next = document.getElementById('nextBtn');
    const prev = document.getElementById('prevBtn');

    const scroll = 400;

    next.addEventListener('click', () => {
        row.scrollBy({
            left: scroll,
            behavior: 'smooth'
        });
    });

    prev.addEventListener('click', () => {
        row.scrollBy({
            left: -scroll,
            behavior: 'smooth'
        });
    });
}

