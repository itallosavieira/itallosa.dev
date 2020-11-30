const cards = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');


for (let card of cards) {
    card.querySelector('img').src = `https://img.youtube.com/vi/${card.id}/maxresdefault.jpg`

    card.addEventListener('click', function(){
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${card.id}`;
    });
};

closeModal.addEventListener('click', function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
});

