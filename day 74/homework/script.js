const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {

    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'flex';
      } else if (filter === 'active') {
        card.style.display = card.classList.contains('active') ? 'flex' : 'none';
      } else if (filter === 'inactive') {
        card.style.display = card.classList.contains('active') ? 'none' : 'flex';
      }
    });
  });
});

document.querySelectorAll('.remove').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.card').remove();
  });
});

document.querySelectorAll('.toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('on');
    toggle.closest('.card').classList.toggle('active');
  });
});

