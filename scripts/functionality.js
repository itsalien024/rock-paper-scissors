let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let message = document.querySelector('#winnerMessage');
let playerScore = document.querySelector('#pNumbers');
let computerScore = document.querySelector('#cNumbers');
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
  if (playerScore == 5 || computerScore == 5) {
    pNumbers.innerHTML = ('0');
    cNumbers.innerHTML = ('0');
    playerScore = 0;
    computerScore = 0;
  };

  if (playerScore == 6) {
    message.innerHTML = ('Player Wins The Game!');
  } else if (computerScore == 6) {
    message.innerHTML = ('Computer Wins The Game!');
  }
}



rock.onclick = function () {
  let cMove = computersMove();
  playersMove = 'rock';
  reset();

  switch(true) {
    case playersMove == 'rock' && cMove == 'rock':
      message.innerHTML = ('Its A Tie!')
      break;

    case playersMove == 'rock' && cMove == 'paper':
      computerScore++
      message.innerHTML = ('Computer Wins!')
      cNumbers.innerHTML = (computerScore);
      break;

    case playersMove == 'rock' && cMove == 'scissors':
      playerScore++
      message.innerHTML = ('Player Wins!')
      pNumbers.innerHTML = (playerScore);
      break;
  };
  reset();
}

paper.onclick = function () {
  let cMove = computersMove();
  playersMove = 'paper';
  reset();

  switch(true) {
    case playersMove == 'paper' && cMove == 'rock':
      playerScore++
      message.innerHTML = ('Player Wins!')
      pNumbers.innerHTML = (playerScore);
      break;

    case playersMove == 'paper' && cMove == 'paper':
      message.innerHTML = ('Its A Tie!')
      break;

    case playersMove == 'paper' && cMove == 'scissors':
      computerScore++
      message.innerHTML = ('Computer Wins!')
      cNumbers.innerHTML = (computerScore);
      break;
  };
  reset();
}

scissors.onclick = function () {
  let cMove = computersMove();
  playersMove = 'scissors';
  reset();

  switch(true) {
    case playersMove == 'scissors' && cMove == 'rock':
      computerScore++
      message.innerHTML = ('Computer Wins!')
      cNumbers.innerHTML = (computerScore);
      break;

    case playersMove == 'scissors' && cMove == 'paper':
      playerScore++
      message.innerHTML = ('Player Wins!')
      pNumbers.innerHTML = (playerScore);
      break;

    case playersMove == 'scissors' && cMove == 'scissors':
      message.innerHTML = ('Its A Tie!')
      break;
      
  };
  reset();
}

