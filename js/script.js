'use strict';

var paper = document.getElementById('paper-button');
var stone = document.getElementById('stone-button');
var scissors = document.getElementById('scissors-button');
var output = document.getElementById('output');
var rounds = document.getElementById('result');
var newgame = document.getElementById('new-game');
var resultOfGame = '';
var playerScore = 0;
var computerScore = 0;
var roundsamount ; //Amount of rounds by player
var gameActive = false;

//Main function = playerMove

//computer choices 

var computerMove = function(){
  
  var computerChoice = '';
  var numberGuess = Math.floor((Math.random()*3+1));

  if (numberGuess === 1) {
    computerChoice = 'Paper';
  } else if (numberGuess === 2){
      computerChoice = 'Stone';
  } else if (numberGuess === 3){
      computerChoice = 'Scissors';
  } 
  
  return computerChoice;
};

var playerMove = function(move) {
  
  var computerChoice = computerMove();
  //Compare Choices

  if (move === computerChoice){
    resultOfGame = 'Draw';
  } else if ((move == 'Paper')&&(computerChoice == 'Stone')){
    resultOfGame = 'Player wins';
  } else if ((move == 'Stone')&&(computerChoice == 'Scissors')){
    resultOfGame = 'Player wins';
  } else if ((move == 'Scissors')&&(computerChoice == 'Paper')){
    resultOfGame = 'Player wins';
  } else {
    resultOfGame = 'Computer wins';
  }
  
  if (resultOfGame === 'Player wins') {
    playerScore ++;
  } else if (resultOfGame === 'Computer wins') {
    computerScore ++;
  }

//Results

  output.innerHTML = resultOfGame + ':' + ' you played ' + move + ' computer played ' + computerChoice + '<br>' + output.innerHTML;
  result.innerHTML = 'Player: ' + playerScore + ' vs. Computer ' + computerScore + '<br><br>';
  
    if (playerScore == roundsamount) {
      output.innerHTML = 'You won entire game! Bravo!' + '<br>' + output.innerHTML;
      gameActive = false;
  } else if (computerScore == roundsamount) {
      output.innerHTML = 'I am sorry. Computer won entire game :(' + '<br>' + output.innerHTML;
      gameActive = false;
  }
  
};



paper.addEventListener('click', function (){
  if (gameActive === true) {
    playerMove('Paper');
  } else {
    output.innerHTML = 'Game over, please press the new game button!' + '<br>' + output.innerHTML;
  }
});
stone.addEventListener('click', function (){
  if (gameActive === true) {
    playerMove('Stone');
  } else {
    output.innerHTML = 'Game over, please press the new game button!' + '<br>' + output.innerHTML;
  }
});
scissors.addEventListener('click', function(){
  if (gameActive === true) {
    playerMove('Scissors');
  } else {
     output.innerHTML = 'Game over, please press the      new game button!' + '<br>' + output.innerHTML;
  }
});

//ID RESULT
//choosing amount of rounds
newgame.addEventListener('click', function (){
  playerScore = 0;
  computerScore = 0;
  result.innerHTML = 'Player: ' + playerScore + ' vs. Computer ' + computerScore + '<br>';
  roundsamount = window.prompt ('How many rounds you want to play?')
  gameActive = true;
  output.innerHTML = '';


//comunicate about amount of rounds to win entire game
  output.innerHTML = 'To win entire game you need to win ' + roundsamount + ' rounds. So Come On!' + '<br>' + output.innerHTML;
  
  
});