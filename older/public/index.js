const cards = document.querySelectorAll('.card');


for (let card of cards) {
    card.querySelector('img').src = `https://img.youtube.com/vi/${card.id}/maxresdefault.jpg`

    card.addEventListener('click', function(){
        const videoId = card.getAttribute('id');
        window.location.href = `/video?id=${videoId}`;
    });
};


