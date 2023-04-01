let cardIndex = 0;
const flipcards = document.querySelectorAll('.flipcard');

function nextCard() {
  flipcards[cardIndex].classList.remove('active');
  cardIndex = (cardIndex + 1) % flipcards.length;
  flipcards[cardIndex].classList.add('active');
}

// Initialisation
flipcards[0].classList.add('active');
