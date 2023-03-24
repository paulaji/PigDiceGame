'use strict';

// overlay and instruction

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnmode20 = document.querySelector('.score-20');
const btnmode50 = document.querySelector('.score-50');
const btnmode100 = document.querySelector('.score-100');

modal.classList.remove('hidden');
overlay.classList.remove('hidden');

// document.addEventListener('keydown', function (event) {
//   if (event.key == 'Enter' && !modal.classList.contains('hidden')) {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   }
// });

// PIGGIE

const piggie = function () {
  // btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  // game code
  // storing different buttons and necessary elements
  const score0El = document.querySelector('#score--0');
  const score1El = document.getElementById('score--1');
  const diceEl = document.querySelector('.dice');
  const btnNew = document.querySelector('.btn--new');
  const btnRoll = document.querySelector('.btn--roll');
  const btnHold = document.querySelector('.btn--hold');
  const current0El = document.getElementById('current--0');
  const current1El = document.getElementById('current--1');
  const player0El = document.querySelector('.player--0');
  const player1El = document.querySelector('.player--1');

  let playing = true;

  // we are storing scores in an array
  let scores = [0, 0];
  // array de 0th positionil player 0 inte and 1st positionil player 1 inte
  let currentScore = 0;
  let activePlayer = 0;

  // firstly dice ine hide cheyyanam and setting scores to 0
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;

  // switch player cheyyaan olla function
  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
  };

  // dice roll
  btnRoll.addEventListener('click', function () {
    if (playing) {
      // first thanne random dice roll generate cheyyanam
      const dice = Math.trunc(Math.random() * 6) + 1;
      // +1 cheythille it will be 0 to 5
      console.log(dice);

      // display the corresponding dice image
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;

      // check if 1 or not, true, change to other player
      if (dice != 1) {
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
        // ipo entha cheythe enn vecha, activePlayer was globally declared as 0 indicating to player 1
        // when we roll the number 1, we just set activePlayer as 1 which means player 2
      }

      //   document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
      //   activePlayer = activePlayer == 0 ? 1 : 0;
      //   currentScore = 0;
      //   player1El.classList.toggle('player--active');
      //   player0El.classList.toggle('player--active');
      // }
      else switchPlayer();
    }
  });

  btnHold.addEventListener('click', function () {
    if (playing) {
      // 1. Add current score to active player's main score
      scores[activePlayer] += currentScore;
      //eg scores[1] = scores[1] + currentScore
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      // 2. Check if player's score >= 100
      if (scores[activePlayer] >= 20) {
        diceEl.src = `player-${activePlayer}.png`;
        playing = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add(`player--winner`);
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove(`player--active`);
      } else {
        switchPlayer();
      }
    }

    // 3. Switch to next player (when hold point cheyumbo)
    // document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
    // activePlayer = activePlayer == 0 ? 1 : 0;
    // currentScore = 0;
    // player1El.classList.toggle('player--active');
    // player0El.classList.toggle('player--active');
  });

  // now the last functionality
  // when we press btnNew, we need to reset the game
  btnNew.addEventListener('click', function () {
    // 1) dice or the img source should be hidden
    diceEl.classList.add('hidden');
    // 2) total score should be 0
    score0El.textContent = 0;
    score1El.textContent = 0;
    // 3) remove player winner and add player active
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--winner`);
    document.querySelector(`.player--0`).classList.add(`player--active`);
    document.querySelector(`.player--1`).classList.remove(`player--active`);
    // 4) current scores should also be 0
    current0El.textContent = 0;
    current1El.textContent = 0;
    // 5) variables should be set back to original
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;
  });
};

btnCloseModal.addEventListener('click', piggie);

// MODE 20
const mode20 = function () {
  // btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  // game code
  // storing different buttons and necessary elements
  const score0El = document.querySelector('#score--0');
  const score1El = document.getElementById('score--1');
  const diceEl = document.querySelector('.dice');
  const btnNew = document.querySelector('.btn--new');
  const btnRoll = document.querySelector('.btn--roll');
  const btnHold = document.querySelector('.btn--hold');
  const current0El = document.getElementById('current--0');
  const current1El = document.getElementById('current--1');
  const player0El = document.querySelector('.player--0');
  const player1El = document.querySelector('.player--1');

  let playing = true;

  // we are storing scores in an array
  let scores = [0, 0];
  // array de 0th positionil player 0 inte and 1st positionil player 1 inte
  let currentScore = 0;
  let activePlayer = 0;

  // firstly dice ine hide cheyyanam and setting scores to 0
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;

  // switch player cheyyaan olla function
  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
  };

  // dice roll
  btnRoll.addEventListener('click', function () {
    if (playing) {
      // first thanne random dice roll generate cheyyanam
      const dice = Math.trunc(Math.random() * 6) + 1;
      // +1 cheythille it will be 0 to 5
      console.log(dice);

      // display the corresponding dice image
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;

      // check if 1 or not, true, change to other player
      if (dice != 1) {
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
        // ipo entha cheythe enn vecha, activePlayer was globally declared as 0 indicating to player 1
        // when we roll the number 1, we just set activePlayer as 1 which means player 2
      }

      //   document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
      //   activePlayer = activePlayer == 0 ? 1 : 0;
      //   currentScore = 0;
      //   player1El.classList.toggle('player--active');
      //   player0El.classList.toggle('player--active');
      // }
      else switchPlayer();
    }
  });

  btnHold.addEventListener('click', function () {
    if (playing) {
      // 1. Add current score to active player's main score
      scores[activePlayer] += currentScore;
      //eg scores[1] = scores[1] + currentScore
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      // 2. Check if player's score >= 100
      if (scores[activePlayer] >= 20) {
        diceEl.src = `player-${activePlayer}.png`;
        playing = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add(`player--winner`);
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove(`player--active`);
      } else {
        switchPlayer();
      }
    }

    // 3. Switch to next player (when hold point cheyumbo)
    // document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
    // activePlayer = activePlayer == 0 ? 1 : 0;
    // currentScore = 0;
    // player1El.classList.toggle('player--active');
    // player0El.classList.toggle('player--active');
  });

  // now the last functionality
  // when we press btnNew, we need to reset the game
  btnNew.addEventListener('click', function () {
    // 1) dice or the img source should be hidden
    diceEl.classList.add('hidden');
    // 2) total score should be 0
    score0El.textContent = 0;
    score1El.textContent = 0;
    // 3) remove player winner and add player active
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--winner`);
    document.querySelector(`.player--0`).classList.add(`player--active`);
    document.querySelector(`.player--1`).classList.remove(`player--active`);
    // 4) current scores should also be 0
    current0El.textContent = 0;
    current1El.textContent = 0;
    // 5) variables should be set back to original
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;
  });
};

btnmode20.addEventListener('click', mode20);

// MODE 50
const mode50 = function () {
  // btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  // game code
  // storing different buttons and necessary elements
  const score0El = document.querySelector('#score--0');
  const score1El = document.getElementById('score--1');
  const diceEl = document.querySelector('.dice');
  const btnNew = document.querySelector('.btn--new');
  const btnRoll = document.querySelector('.btn--roll');
  const btnHold = document.querySelector('.btn--hold');
  const current0El = document.getElementById('current--0');
  const current1El = document.getElementById('current--1');
  const player0El = document.querySelector('.player--0');
  const player1El = document.querySelector('.player--1');

  let playing = true;

  // we are storing scores in an array
  let scores = [0, 0];
  // array de 0th positionil player 0 inte and 1st positionil player 1 inte
  let currentScore = 0;
  let activePlayer = 0;

  // firstly dice ine hide cheyyanam and setting scores to 0
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;

  // switch player cheyyaan olla function
  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
  };

  // dice roll
  btnRoll.addEventListener('click', function () {
    if (playing) {
      // first thanne random dice roll generate cheyyanam
      const dice = Math.trunc(Math.random() * 6) + 1;
      // +1 cheythille it will be 0 to 5
      console.log(dice);

      // display the corresponding dice image
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;

      // check if 1 or not, true, change to other player
      if (dice != 1) {
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
        // ipo entha cheythe enn vecha, activePlayer was globally declared as 0 indicating to player 1
        // when we roll the number 1, we just set activePlayer as 1 which means player 2
      }

      //   document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
      //   activePlayer = activePlayer == 0 ? 1 : 0;
      //   currentScore = 0;
      //   player1El.classList.toggle('player--active');
      //   player0El.classList.toggle('player--active');
      // }
      else switchPlayer();
    }
  });

  btnHold.addEventListener('click', function () {
    if (playing) {
      // 1. Add current score to active player's main score
      scores[activePlayer] += currentScore;
      //eg scores[1] = scores[1] + currentScore
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      // 2. Check if player's score >= 100
      if (scores[activePlayer] >= 50) {
        diceEl.src = `player-${activePlayer}.png`;
        playing = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add(`player--winner`);
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove(`player--active`);
      } else {
        switchPlayer();
      }
    }

    // 3. Switch to next player (when hold point cheyumbo)
    // document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
    // activePlayer = activePlayer == 0 ? 1 : 0;
    // currentScore = 0;
    // player1El.classList.toggle('player--active');
    // player0El.classList.toggle('player--active');
  });

  // now the last functionality
  // when we press btnNew, we need to reset the game
  btnNew.addEventListener('click', function () {
    // 1) dice or the img source should be hidden
    diceEl.classList.add('hidden');
    // 2) total score should be 0
    score0El.textContent = 0;
    score1El.textContent = 0;
    // 3) remove player winner and add player active
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--winner`);
    document.querySelector(`.player--0`).classList.add(`player--active`);
    document.querySelector(`.player--1`).classList.remove(`player--active`);
    // 4) current scores should also be 0
    current0El.textContent = 0;
    current1El.textContent = 0;
    // 5) variables should be set back to original
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;
  });
};

btnmode50.addEventListener('click', mode50);

// MODE 100
const mode100 = function () {
  // btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  // game code
  // storing different buttons and necessary elements
  const score0El = document.querySelector('#score--0');
  const score1El = document.getElementById('score--1');
  const diceEl = document.querySelector('.dice');
  const btnNew = document.querySelector('.btn--new');
  const btnRoll = document.querySelector('.btn--roll');
  const btnHold = document.querySelector('.btn--hold');
  const current0El = document.getElementById('current--0');
  const current1El = document.getElementById('current--1');
  const player0El = document.querySelector('.player--0');
  const player1El = document.querySelector('.player--1');

  let playing = true;

  // we are storing scores in an array
  let scores = [0, 0];
  // array de 0th positionil player 0 inte and 1st positionil player 1 inte
  let currentScore = 0;
  let activePlayer = 0;

  // firstly dice ine hide cheyyanam and setting scores to 0
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;

  // switch player cheyyaan olla function
  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
  };

  // dice roll
  btnRoll.addEventListener('click', function () {
    if (playing) {
      // first thanne random dice roll generate cheyyanam
      const dice = Math.trunc(Math.random() * 6) + 1;
      // +1 cheythille it will be 0 to 5
      console.log(dice);

      // display the corresponding dice image
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;

      // check if 1 or not, true, change to other player
      if (dice != 1) {
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
        // ipo entha cheythe enn vecha, activePlayer was globally declared as 0 indicating to player 1
        // when we roll the number 1, we just set activePlayer as 1 which means player 2
      }

      //   document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
      //   activePlayer = activePlayer == 0 ? 1 : 0;
      //   currentScore = 0;
      //   player1El.classList.toggle('player--active');
      //   player0El.classList.toggle('player--active');
      // }
      else switchPlayer();
    }
  });

  btnHold.addEventListener('click', function () {
    if (playing) {
      // 1. Add current score to active player's main score
      scores[activePlayer] += currentScore;
      //eg scores[1] = scores[1] + currentScore
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      // 2. Check if player's score >= 100
      if (scores[activePlayer] >= 100) {
        diceEl.src = `player-${activePlayer}.png`;
        playing = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add(`player--winner`);
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove(`player--active`);
      } else {
        switchPlayer();
      }
    }

    // 3. Switch to next player (when hold point cheyumbo)
    // document.getElementById(`current--${activePlayer}`).textContent = 0; // 1 roll cheytha current score 0 aakum
    // activePlayer = activePlayer == 0 ? 1 : 0;
    // currentScore = 0;
    // player1El.classList.toggle('player--active');
    // player0El.classList.toggle('player--active');
  });

  // now the last functionality
  // when we press btnNew, we need to reset the game
  btnNew.addEventListener('click', function () {
    // 1) dice or the img source should be hidden
    diceEl.classList.add('hidden');
    // 2) total score should be 0
    score0El.textContent = 0;
    score1El.textContent = 0;
    // 3) remove player winner and add player active
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--winner`);
    document.querySelector(`.player--0`).classList.add(`player--active`);
    document.querySelector(`.player--1`).classList.remove(`player--active`);
    // 4) current scores should also be 0
    current0El.textContent = 0;
    current1El.textContent = 0;
    // 5) variables should be set back to original
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;
  });
};

btnmode100.addEventListener('click', mode100);
