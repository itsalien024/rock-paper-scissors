let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let message = document.querySelector('#winnerMessage');
let playerScore = document.querySelector('#playerScoreNumber');
let computerScore = document.querySelector('#computerScoreNumber');
let winner;
let playersMove;

playerScore = 0;
computerScore = 0;

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

let reset = function () {
  playerScore = 0;
  computerScore = 0;
}


rock.onclick = function () {
  let cMove = computersMove();
  playersMove = 'rock';

  switch(true) {
    case playersMove == 'rock' && cMove == 'rock':
      message.innerHTML = ('Its A Tie!')
      break;

    case playersMove == 'rock' && cMove == 'paper':
      computerScore++
      message.innerHTML = ('Computer Wins!')
      computerScoreNumber.innerHTML = (computerScore);
      break;

    case playersMove == 'rock' && cMove == 'scissors':
      playerScore++
      message.innerHTML = ('Player Wins!')
      playerScoreNumber.innerHTML = (playerScore);
      break;
  }

  if (playerScore == 10) {
    message.innerHTML = ('Player Wins The Game!')
    reset();
  }else if (computerScore == 10) {
    message.innerHTML = ('Comouter Wins The Game!')
    reset();
  }

  return;
}

paper.onclick = function () {
  let cMove = computersMove();
  playersMove = 'paper';

  switch(true) {
    case playersMove == 'paper' && cMove == 'rock':
      playerScore++
      message.innerHTML = ('Player Wins!')
      playerScoreNumber.innerHTML = (playerScore);
      break;

    case playersMove == 'paper' && cMove == 'paper':
      message.innerHTML = ('Its A Tie!')
      break;

    case playersMove == 'paper' && cMove == 'scissors':
      computerScore++
      message.innerHTML = ('Computer Wins!')
      computerScoreNumber.innerHTML = (computerScore);
      break;
  }

    if (playerScore == 10) {
      message.innerHTML = ('Player Wins The Game!')
      reset();
    }else if (computerScore == 10) {
      message.innerHTML = ('Comouter Wins The Game!')
      reset();
    }

  return ;
}

scissors.onclick = function () {
  let cMove = computersMove();
  playersMove = 'scissors';

  switch(true) {
    case playersMove == 'scissors' && cMove == 'rock':
      computerScore++
      message.innerHTML = ('Computer Wins!')
      computerScoreNumber.innerHTML = (computerScore);
      break;

    case playersMove == 'scissors' && cMove == 'paper':
      playerScore++
      message.innerHTML = ('Player Wins!')
      playerScoreNumber.innerHTML = (playerScore);
      break;

    case playersMove == 'scissors' && cMove == 'scissors':
      message.innerHTML = ('Its A Tie!')
      break;
  }

  if (playerScore == 10) {
    message.innerHTML = ('Player Wins The Game!')
    reset();
  }else if (computerScore == 10) {
    message.innerHTML = ('Comouter Wins The Game!')
    reset();
  }

  return ;
}

