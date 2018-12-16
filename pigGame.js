var screenDice, firstPlayer, secondPlayer, currentScore, globalScore; 
screenDice = document.querySelector('.dice-img');

globalScore = [0, 0];
currentScore = 0;
playing = 0;

document.querySelector('.wrapper').style.display='none'; 

function refresh() {
  //Set all score-values to zero (0)
  document.querySelector('#player-0-current-score').textContent = 0;
  document.querySelector('#player-1-current-score').textContent = 0;
  document.querySelector('#player-0-score').textContent = 0;
  document.querySelector('#player-1-score').textContent = 0;

  globalScore = [0, 0];document.querySelector('#player0').classList.add('active');
  currentScore = 0;
  playing = 0;
  currentScore = 0;
  playing = 0;

  document.querySelector('#player0').classList.add('active');

  document.getElementById('btn-roll').style.display = 'block';
  document.getElementById('btn-hold').style.display = 'block';


   // Make game visible, playAgain and newGame buttons disappear
  document.getElementById('btn-playagain').style.display = 'none'
  document.getElementById('btn-newgame').style.display = 'none'
  document.querySelector('#player0').classList.remove('winner'); 
  document.querySelector('#player1').classList.remove('winner'); 
  document.querySelector('body').style.backgroundImage = 'url(images/desert_storm.jpg)';
}


function startGame() {
  // Send names to actual game
  var inputOne = document.getElementById('playerOne').value;
  var inputTwo = document.getElementById('playerTwo').value;
  
  if(inputOne != '') {
    document.getElementById('playerOne-name').textContent = inputOne;
    
  } else {
    document.getElementById('playerOne-name').textContent = 'player 1';
    
  }
  if(inputTwo != '') {
    document.getElementById('playerTwo-name').innerHTML = inputTwo; 
  } else {
    document.getElementById('playerTwo-name').innerHTML = 'player 2'; 
  }
  
  // Make game visible and login screen, playAgain and newGame buttons disappear
  
  document.querySelector('#player1').classList.remove('winner'); 
  
  document.querySelector('.login').style.display='none';
  document.querySelector('.wrapper').style.display='block';
  
  refresh() ;
  
  // Hide dice
  screenDice.style.display = 'none';

 
}

function nextPlayer() {
  //this is a long process
  // if (playing === 0) {
    //   playing = 1;
    //   currentScore = 0;
    //   ;
    // }  else {
    //   if (playing === 1) {
    // playing = 0;

  //this is a ternary operator
  playing === 0 ? playing = 1 : playing = 0;

  currentScore = 0;
  document.querySelector('#player-0-current-score').textContent = 0;
  document.querySelector('#player-1-current-score').textContent = 0;

  document.querySelector('#player0').classList.toggle('active');
  document.querySelector('#player1').classList.toggle('active');

  screenDice.style.display = 'none';
}

// ACTUAL GAME



document.querySelector('#btn-roll').addEventListener('click', btnRoll);

function btnRoll() {
  // generate a RANDOM number btw 1 and 6 in the dice
  var dice = (Math.ceil(Math.random() * 6));
  screenDice.style.display = 'block';
  screenDice.src = 'images/dice-' + dice + '.png'
  
  
  // update score to localscore if it != 1
  if (dice !== 1) {
  currentScore += dice; 
  document.querySelector('#player-' + playing + '-current-score').textContent = currentScore;
} 
// change player if score === 0

else {
  nextPlayer();
}
}



document.querySelector('#btn-hold').addEventListener('click', function() {
// update global score and DOM
  globalScore[playing]  += currentScore;
  document.getElementById('player-' + playing + '-score').innerHTML = globalScore[playing];

// check if the current player won the game 
if(globalScore[playing] >= 100) {
  document.getElementById('btn-roll').style.display = 'none';
  document.getElementById('btn-hold').style.display = 'none';
  screenDice.style.display = 'none';
  document.querySelector('#player' + playing).classList.remove('active');
  document.querySelector('#player' + playing).classList.add('winner'); 
  document.querySelector('body').style.backgroundImage = 'url(images/winnerStar.jpg)';
  document.getElementById('btn-playagain').style.display = 'block';
  document.getElementById('btn-newgame').style.display = 'block';
  
  
  // document.querySelector('global-score').style.display = 'none';
  // document.querySelector('bottomSection').style.display = 'none';
  
 } 
// else if(globalScore[1] >= 20) {
//   document.getElementById('btn-roll').style.display = 'none';
//   document.getElementById('btn-hold').style.display = 'none';
//   screenDice.style.display = 'none';
//   document.querySelector('#player' + playing).classList.remove('active');
//  }
 else {
  nextPlayer();
 }
});


// //@game end
// function restartGame() {}
document.getElementById('btn-playagain').addEventListener('click', refresh)   
  
  

  
  // document.querySelectorAll('global-score').style.display = 'block';
  // document.querySelectorAll('bottomSection').style.display = 'block';


// function playAgain() {}
document.getElementById('btn-newgame').addEventListener('click', function () {
  document.querySelector('.wrapper').style.display='none'; 
  document.querySelector('.login').style.display='block';
  document.querySelector('body').style.backgroundImage = 'url(images/dyeBlue.jpg)';
 
}) 

// //Write cheat code
// function Cheat() {}








// *********************************CODE CHALLENGE HINT*******************************************************************

// 1st: store dice roll, check if the previous and next dice are both 6, if true cancel all scores;



