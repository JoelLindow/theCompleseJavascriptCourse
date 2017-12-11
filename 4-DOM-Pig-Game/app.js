/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';
// if you inspect the css it will show that the display property for the .dice class was set to 'none'

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// These will replace any existing HTML test with what we've designated in the code! WOOT!


document.querySelector('.btn-roll').addEventListener('click', function() {
  // ANONYMOUS FUNCTION - A function that has no name that can not be resued!

  // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png'

  // 3. Update the round score IF the rolled number was NOT a 1
  if (dice !== 1) {
    // Add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //Next player
    nextPlayer();

  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;


  // Update UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // Check if player won the Game

  // Next player
  nextPlayer();
});


function nextPlayer() {
  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
};


// event listener has 2 arguments. Type of event and function that should be called when event happens
// a CALLBACK function is a function passed into another function where an event calls it for us



// document.querySelector('#current-' + activePlayer).textContent = dice;
// we don't use textContent here becasue we can only do text. not html. We need the innerHtml method
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// this is a setter becasue it sets a value
//var x = document.querySelector('#score-0').textContent;
//this is a getter becasue it gets a value
