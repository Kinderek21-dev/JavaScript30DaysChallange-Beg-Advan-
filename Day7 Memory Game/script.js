document.addEventListener('DOMContentLoaded', () => {
    const cardImages = [
        'cos1.png', 'cos1.png',
        'cos2.png', 'cos2.png',
        'cos4.png', 'cos4.png',
        'cos5.png', 'cos5.png',
        'cos6.png', 'cos6.png',
        'cos7.png', 'cos7.png',
        'cos8.png', 'cos8.png',
    ];

    const cards = Array.from(document.querySelectorAll('.card'));
    let [firstCard, secondCard] = [null, null];
    let lockBoard = false;
    let score = 0;

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }


    function initializeGame() {
        const shuffledImages = shuffle(cardImages);
        cards.forEach((card, index) => {
            const frontImage = card.querySelector('.front');
            frontImage.src = `./assets/${shuffledImages[index]}`;
            frontImage.dataset.name = shuffledImages[index];
            card.classList.remove('flipped', 'matched');
            card.style.visibility = 'visible';
        });
    }

    function flipCard() {
        if (lockBoard || this === firstCard) return;

        this.classList.add('flipped');
        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        const [firstCardName, secondCardName] = [firstCard, secondCard].map(card =>
            card.querySelector('.front').dataset.name
        );

        if (firstCardName === secondCardName) {
            score++;
            updateScore();
            disableCards();
        } else {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                resetBoard();
            }, 1000);
        }
    }


    function disableCards() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';
        resetBoard();
    }
    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
        
    }
    function updateScore() {
        document.getElementById('score').textContent = score;
    }

    initializeGame();
    cards.forEach(card => card.addEventListener('click', flipCard));
});

function Reset() {
    location.reload();
}