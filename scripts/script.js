function computersMove() {
  const num = 3;
  let compMove;
  let rng;
  rng = Math.floor(Math.random() * num);
  
  if (rng == 0) {
    compMove = 'rock';
  } else if (rng == 1) {
    compMove = 'paper';
  } else if (rng == 2) {
    compMove = 'scissors'
  }
  return compMove;
}

function playersMove(move) {
  let result;
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
let cMove = computersMove();
let pMove = playersMove();

function game(cMove, pMove) {
  switch (true) {
    case (cMove == 'rock' && pMove == 'rock'):
      console.log('Its a tie!');
      console.log('You chose Rock, The computer chose Rock');
      console.log('Player Score: ' + playerScore, 'Computer Score: ' + computerScore,);
      break;

    case (cMove == 'rock' && pMove == 'paper'):
      playerScore ++;
      console.log('Player Wins!');
      console.log('You chose Paper, The computer chose Rock');
      console.log('Player Score: ' + playerScore, 'Computer Score: ' + computerScore,);
      break;

    case (cMove == 'rock' && pMove == 'scissors'):
      computerScore ++;
      console.log('Computer Wins!');
      console.log('You chose Scissors, The computer chose Rock');
      console.log('Player Score: ' + playerScore, 'Computer Score: ' + computerScore,);
      break;
    
    case (cMove == 'paper' && pMove == 'rock'):
      computerScore ++;
      console.log('Computer Wins!');
      console.log('You chose Rock, The computer chose Paper');
      console.log('Player Score: ' + playerScore, 'Computer Score: ' + computerScore,);
      break;

    case (cMove == 'paper' && pMove == 'paper'):
      console.log('Its a tie!');
      console.log('You chose Paper, The computer chose Paper');
      console.log('Player Score: ' + playerScore, 'Computer Score: ' + computerScore,);
      break;
        
    case (cMove == 'paper' && pMove == 'scissors'):
      playerScore ++;
      console.log('Player Wins');
      console.log('You chose Scissors, The computer chose Paper');
      console.log('Player Score: ' + playerScore, 'Computer Score: ' + computerScore,);
      break;

    case (cMove == 'scissors' && pMove == 'rock'):
      playerScore ++;
      console.log('Player Wins!');
      console.log('You chose Rock, The computer chose Scissors');
      console.log('Player Score: ' + playerScore, 'Computer Score: ' + computerScore,);
      break;

    case (cMove == 'scissors' && pMove == 'paper'):
      computerScore ++;
      console.log('Computer Wins!');
      console.log('You chose Paper, The computer chose Scissors');
      console.log('Player Score: ' + playerScore, 'Computer Score: ' + computerScore,);
      break;
        
    case (cMove == 'scissors' && pMove == 'scissors'):
      console.log('Its a tie!');
      console.log('You chose Scissors, The computer chose Scissors');
      console.log('Player Score: ' + playerScore, 'Computer Score: ' + computerScore,);
      break;
  }
}

console.log(game(cMove, pMove));


