/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current-' + activePlayer).textContent = dice;
// we don't use textContent here becasue we can only do text. not html. We need the innerHtml method
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// this is a setter becasue it sets a value


var x = document.querySelector('#score-0').textContent;
//this is a getter becasue it gets a value
console.log(x);

document.querySelector('.dice').style.display = 'none';
// if you inspect the css it will show that the display property for the .dice class was set to 'none'


//
