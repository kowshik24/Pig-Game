'use strict';
// Total Score of each Player
let current = 0;

document.querySelector('.welcome1').play();

// Score of the each player

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

var score0El = document.querySelector('#score--0');

var score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

var welCome = document.querySelector('.Winner');

var currentScore0 = document.querySelector('#current--0');
var currentScore1 = document.querySelector('#current--1');

score0El.textContent = Number(0);
score1El.textContent = Number(0);

let scores = [0, 0];

let activePlayer = 0;

console.log(typeof score0El.textContent);

diceEl.classList.add('hidden');

welCome.classList.add('hidden');

// Rolling Dice

btnRoll.addEventListener('click', function () {
  // 1.Generating a random dice roll
  document.querySelector('.dice1').play();

  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice

  diceEl.classList.remove('hidden');

  diceEl.src = `dice-${dice}.png`;

  //console.log(diceEl.src);

  // 3. Check for '1'

  if (dice !== 1) {
    current += dice;
    document.getElementById(`current--${activePlayer}`).textContent = current;

    //currentScore0.textContent = player0;

    if (scores[activePlayer] >= 100) {
      document.querySelector('.audio').play();
      document.querySelector('.winner--h1').textContent = `Player ${
        activePlayer + 1
      } win!!`;

      //break;
    }
  } else {
    if (scores[activePlayer] >= 100) {
      document.querySelector('.audio').play();

      document.querySelector('.winner--h1').textContent = `Player ${
        activePlayer + 1
      } win!!`;
      document.querySelector('.player').classList.add('hidden');
      player0El.classList.add('hidden');
      player1El.classList.add('hidden');
      diceEl.classList.add('hidden');
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
      welCome.classList.remove('hidden');

      //break;
    }
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    current = 0;
  }
});

btnHold.addEventListener('click', function () {
  document.querySelector('.hold1').play();

  scores[activePlayer] += current;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    document.querySelector('.audio').play();
    document.querySelector('.winner--h1').textContent = `Player ${
      activePlayer + 1
    } win!!`;
    document.querySelector('.player').classList.add('hidden');
    player0El.classList.add('hidden');
    player1El.classList.add('hidden');
    diceEl.classList.add('hidden');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');

    welCome.classList.remove('hidden');

    //break;
  }

  current = 0;

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
});

btnNew.addEventListener('click', function () {
  window.location.reload();
});
