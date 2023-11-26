function computersMove() {
  const num = 3;
  let choice;
  choice = computersMove();
  let rng;
  rng = Math.floor(Math.random() * num);
  
  if (rng == 0) {
    choice = 'rock';
  } else if (rng == 1) {
    choice = 'paper';
  } else if (rng == 2) {
    choice = 'scissors'
  }
  return choice;
}

function playersMove(move) {
  let result;
  result = playersMove();
  move = prompt('Rock, Paper or Scissors? ->');
  if (move.toLowerCase() == "rock") {
    result = 'rock';
  } else if (move.toLowerCase() == "paper") {
    result = 'paper'
  } else if (move.toLowerCase() == "scissors") {
    result = 'scissors';
  } else {
    console.log('Please choose a valid move.')
  }
  return result;
}

let computerScore = 0;
let playerScore = 0; 

function game(choice, result) {
  switch (true) {
    case (computersMove() == 'rock' && playersMove() == 'rock'):
      console.log('Its a tie!');
      break;

    case (computersMove() == 'rock' && playersMove() == 'paper'):
      playerScore ++;
      console.log('Player Wins!');
      break;

    case (computersMove() == 'rock' && playersMove() == 'scissors'):
      computerScore ++;
      console.log('Computer Wins!');
      break;
    
    case (computersMove() == 'paper' && playersMove() == 'rock'):
      computerScore ++;
      console.log('Computer Wins!');
      break;

    case (computersMove() == 'paper' && playersMove() == 'paper'):
      console.log('Its a tie!');
      break;
        
    case (computersMove() == 'paper' && playersMove() == 'scissors'):
      playerScore ++;
      console.log('Player Wins');
      break;

    case (computersMove() == 'scissors' && playersMove() == 'rock'):
      playerScore ++;
      console.log('Player Wins!');
      break;

    case (computersMove() == 'scissors' && playersMove() == 'paper'):
      computerScore ++;
      console.log('Computer Wins!');
      break;
        
    case (computersMove() == 'scissors' && playersMove() == 'scissors'):
      console.log('Its a tie!');
      break;
  }
}


