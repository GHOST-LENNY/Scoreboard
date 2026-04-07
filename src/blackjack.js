let cards = [];
let sum = 0;

// number, strings and booleans are primitive data types.
// arrays and objects are composite data types.
// A function is called directly.
// A method is a function attached to an object. They are called via that object (array.push(), string.toUpperCase())
let player = {
  name: "Lenny",
  chips: "$1000",
};

let message = "";
let hasBlackJack = false;
let isActive = false;

let messageEl = document.getElementById("message-el");
let cardEl = document.querySelector(".card-el");
let displaySum = document.querySelector(".displaysum");
let startBtn = document.querySelector(".startgame");
let chips = document.querySelector(".chips");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11; // Ace static for now
  } else if (randomNumber > 10) {
    return 10; // 10, Jack, Queen, King
  } else {
    return randomNumber;
  }
}

function startGame() {
  if (isActive) return;
  isActive = true;
  startBtn.disabled = true;
  startBtn.style.opacity = 0;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  let chipp = "chips";
  player[chipp] = sum; // to understand object destructuring (bracket and dot notation).
// player.chips = sum;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += ` ${cards[i]} `;
  }

  if (sum < 21) {
    message = "Do you want to draw another card or Stand?";
  } else if (sum === 21) {
    message = "Topgun, You've got a BLACKJACK ✨🎉";
    hasBlackJack = true;
    isActive = false;
  } else {
    message = "You're out of the game! 😭";
    isActive = false;
  }
  messageEl.textContent = `${message}`;
  // cardEl.textContent = ` Card: ${cards.join(" ")}`;
  displaySum.textContent = `Sum: ${sum}`;
  chips.textContent = `${player.name} ${player.chips}`;
}

function pickNewCard() {
  if (!isActive) return;

  let newCard = getRandomCard();
  sum += newCard;
  cards.push(newCard);

  renderGame();
}

function restartGame() {
  isActive = false;
  hasBlackJack = false;
  sum = 0;
  cards = [];
  player.chips = "";
  cardEl.textContent = "Cards: ";
  displaySum.textContent = "Sum: ";
  messageEl.textContent = "Click Play Now to start another round?";
  chips.textContent = player.chips;
  startBtn.disabled = false;
  startBtn.style.opacity = 1;
  // console.log(isActive, sum, cards);
}
