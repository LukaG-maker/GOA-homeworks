const filterButtons = document.querySelectorAll('.filters button');
const searchInput = document.getElementById('search');

function updateCardsDisplay() {
    const activeFilter = document.querySelector('.filters .active').dataset.filter;
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const isActive = card.dataset.active === 'true';
        let matchesFilter = false;

        if (activeFilter === 'all') matchesFilter = true;
        else if (activeFilter === 'active' && isActive) matchesFilter = true;
        else if (activeFilter === 'inactive' && !isActive) matchesFilter = true;

        if (matchesFilter && name.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filters .active').classList.remove('active');
        button.classList.add('active');
        updateCardsDisplay();
    });
});

searchInput.addEventListener('input', updateCardsDisplay);

document.querySelectorAll('.toggle input').forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        const card = e.target.closest('.card');
        card.dataset.active = e.target.checked ? 'true' : 'false';
        updateCardsDisplay();
    });
});

document.querySelectorAll('.remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.card').remove();
    });
});
