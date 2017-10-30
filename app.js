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
activePlayer = 0;

// make random number 
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//display current role; add role to total score, reset role if role = 1
function setScore() {
     document.querySelector('#current-0').style.visibility = 'visible';
     document.querySelector('#current-1').style.visibility = 'visible';
    // random number 
    var dice = getRandom(1,6);
    
    //display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // update the round score IF the rolled number was NOT 1
    if(dice != 1)
        {
            document.querySelector('#current-' + activePlayer).textContent = dice;
            // add score to total score 
            scores[activePlayer] += dice;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            console.log(scores[activePlayer] )
        }
    else{
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    }
}

// add and remove class player-panel and set active player 
function setActive(){
    if(activePlayer === 0 )
    {
            activePlayer = 1;
            document.querySelector('.player-' + activePlayer + '-panel').className = 'player-' + activePlayer + '-panel' + ' active';
            document.querySelector('.player-' + 0 + '-panel').className = 'player-' + 0 + '-panel';
        }else 
        {
            activePlayer = 0;
            document.querySelector('.player-' + activePlayer + '-panel').className = 'player-' + activePlayer + '-panel' + ' active';
            document.querySelector('.player-' + 1 + '-panel').className = 'player-' + 1 + '-panel';
        }

}

function resetGame() {
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-' + activePlayer).textContent = 0;
    document.querySelector('#score-' + 1).textContent = 0;
    
    document.querySelector('#current-0').style.visibility = 'hidden';
    document.querySelector('#current-1').style.visibility = 'hidden';
    
}


document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener("click", setScore );

document.querySelector('.btn-hold').addEventListener("click", setActive);

document.querySelector('.btn-new').addEventListener("click", resetGame);



