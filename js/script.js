'use strict';

var paper = document.getElementById('paper-button');
var stone = document.getElementById('stone-button');
var scissors = document.getElementById('scissors-button');
var output = document.getElementById('output');
var rounds = document.getElementById('result');
var newgame = document.getElementById('new-game');
var params = {
    resultOfGame: '';
    playerScore: 0;
    computerScore: 0;
    roundsAmount: 0;
    gameActive: false;
};


//Main function = playerMove

//computer choices 

var computerMove = function() {

    var computerChoice = '';
    var numberGuess = Math.floor((Math.random() * 3 + 1));

    if (numberGuess === 1) {
        computerChoice = 'Paper';
    } else if (numberGuess === 2) {
        computerChoice = 'Stone';
    } else if (numberGuess === 3) {
        computerChoice = 'Scissors';
    }

    return computerChoice;
};

var playerMove = function(move) {

    var computerChoice = computerMove();
    Compare Choices

    if (move === computerChoice) {
        params.resultOfGame = 'Draw';
    } else if ((move == 'Paper') && (computerChoice == 'Stone')) {
        params.resultOfGame = 'Player wins';
    } else if ((move == 'Stone') && (computerChoice == 'Scissors')) {
        params.resultOfGame = 'Player wins';
    } else if ((move == 'Scissors') && (computerChoice == 'Paper')) {
        params.resultOfGame = 'Player wins';
    } else {
        params.resultOfGame = 'Computer wins';
    }

    if (params.resultOfGame === 'Player wins') {
        params.playerScore++;
    } else if (params.resultOfGame === 'Computer wins') {
        params.computerScore++;
    }


    //Results

    output.innerHTML = params.resultOfGame + ':' + ' you played ' + move + ' computer played ' + computerChoice + '<br>' + output.innerHTML;
    result.innerHTML = 'Player: ' + params.playerScore + ' vs. Computer ' + params.computerScore + '<br><br>';

    if (params.playerScore == params.roundsAmount) {
        output.innerHTML = 'You won entire game! Bravo!' + '<br>' + output.innerHTML;
        params.gameActive = false;
    } else if (params.computerScore == params.roundsAmount) {
        output.innerHTML = 'I am sorry. Computer won entire game :(' + '<br>' + output.innerHTML;
        params.gameActive = false;
    }

};

//  Etap II

var buttonFunction = function(move) {

    var buttonAttribute = event.target.getAttribute('data-move');

    playerMove(buttonAttribute);

    var buttons = document.querySelectorAll('player-move');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', playerMove);
    }
};

// Koniec Etapu 2

// paper.addEventListener('click', function() {
//     if (gameActive === true) {
//         playerMove('Paper');
//     } else {
//         output.innerHTML = 'Game over, please press the new game button!' + '<br>' + output.innerHTML;
//     }
// });
// stone.addEventListener('click', function() {
//     if (gameActive === true) {
//         playerMove('Stone');
//     } else {
//         output.innerHTML = 'Game over, please press the new game button!' + '<br>' + output.innerHTML;
//     }
// });
// scissors.addEventListener('click', function() {
//     if (gameActive === true) {
//         playerMove('Scissors');
//     } else {
//         output.innerHTML = 'Game over, please press the      new game button!' + '<br>' + output.innerHTML;
//     }
// });

//ID RESULT
//choosing amount of rounds
newgame.addEventListener('click', function() {
    params.playerScore = 0;
    params.computerScore = 0;
    result.innerHTML = 'Player: ' + params.playerScore + ' vs. Computer ' + params.computerScore + '<br>';
    params.roundsAmount = window.prompt('How many rounds you want to play?')
    params.gameActive = true;
    output.innerHTML = '';


    //comunicate about amount of rounds to win entire game
    output.innerHTML = 'To win entire game you need to win ' + params.roundsAmount + ' rounds. So Come On!' + '<br>' + output.innerHTML;


});