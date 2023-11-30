let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');


let playersMove = function() {
  let playerSelection;
  rock.onclick = function() {
    playerSelection = 'rock';
    return playerSelection;
  }
  paper.onclick = function() {
    playerSelection = 'paper';
    return playerSelection;
  }
  scissors.onclick = function() {
    playerSelection = 'scissors';
    return playerSelection;
  }
  return playerSelection;
}

let computersMove = function() {
  let rng = Math.floor(Math.random() * 3);
  let computerSelection;
  
  if (rng == 0) {
    computerSelection = 'rock';
  } else if (rng == 1) {
    computerSelection = 'paper';
  } else if (rng == 2) {
    computerSelection = 'scissors';
  }
  return computerSelection;
}



let playerWinOptions = function() {
  let winMessage;
  switch(true) {
    case playersMove() == 'rock' && computersMove() == 'scissors':
      winMessage = 'You Chose Rock, Computer Chose Scissors. You Win!'
      break;

    case playersMove() == 'paper' && computersMove() == 'rock':
      winMessage = 'You Chose Paper, Computer Chose Rock. You Win!'
      break;

    case playersMove() == 'scissors' && computersMove() == 'paper':
      winMessage = 'You Chose Scissors, Computer Chose Paper. You Win!'
      break;
  }
  return winMessage;
}




