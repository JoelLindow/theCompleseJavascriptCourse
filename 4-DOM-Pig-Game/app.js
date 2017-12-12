// Challenges

// A challenger loses his whole score if he rolls 2 6's in a row


var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice

document.querySelector('.btn-roll').addEventListener('click', function() {
  // ANONYMOUS FUNCTION - A function that has no name that can not be resued!
  if (gamePlaying) {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice === 6 && lastDice === 6) {
      // Player Loses Score
      scores[activePlayer] = 0;
      document.querySelector('score-' + activePlayer).textContent = '0';
      nextPlayer();
    } else if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      //Next player
      nextPlayer();
    // }

    lastDice = dice;
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the Game
    if (scores[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      // Remember! We have add, remove and toggle
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
};

// event listener has 2 arguments. Type of event and function that should be called when event happens
// a CALLBACK function is a function passed into another function where an event calls it for us

// document.querySelector('#current-' + activePlayer).textContent = dice;
// we don't use textContent here becasue we can only do text. not html. We need the innerHtml method
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// this is a setter becasue it sets a value
//var x = document.querySelector('#score-0').textContent;
//this is a getter becasue it gets a value
