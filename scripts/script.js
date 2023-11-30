// let rock = document.querySelector('#rock');
// let paper = document.querySelector('#paper');
// let scissors = document.querySelector('#scissors');


// let playersMove = function() {
//   let playerSelection;
//   rock.onclick = function() {
//     playerSelection = 'rock';
//     return playerSelection;
//   }
//   paper.onclick = function() {
//     playerSelection = 'paper';
//     return playerSelection;
//   }
//   scissors.onclick = function() {
//     playerSelection = 'scissors';
//     return playerSelection;
//   }
//   return playerSelection;
// }

// let computersMove = function() {
//   let rng = Math.floor(Math.random() * 3);
//   let computerSelection;
  
//   if (rng == 0) {
//     computerSelection = 'rock';
//   } else if (rng == 1) {
//     computerSelection = 'paper';
//   } else if (rng == 2) {
//     computerSelection = 'scissors';
//   }
//   return computerSelection;
// }


// let playerWinOptions = function() {
//   let winMessage;
  // switch(true) {
  //   case playersMove() == 'rock' && computersMove() == 'scissors':
  //     winMessage = 'pWin'
  //     break;

  //   case playersMove() == 'paper' && computersMove() == 'rock':
  //     winMessage = 'pWin'
  //     break;

  //   case playersMove() == 'scissors' && computersMove() == 'paper':
  //     winMessage = 'pWin'
  //     break;
  // }
  // return winMessage;
// }

// let computerWinOptions = function() {
//   let winMessage;
//   switch(true) {
//     case computersMove() == 'rock' && playersMove() == 'scissors':
//       winMessage = 'cWin'
//       break;

//     case computersMove() == 'paper' && playersMove() == 'rock':
//       winMessage = 'cWin'
//       break;

//     case computersMove() == 'scissors' && playersMove() == 'paper':
//       winMessage = 'cWin'
//       break;
//   }
//   return winMessage;
// }

// let tieOptions = function() {
//   let tieMessage;
//   switch(true) {
//     case computersMove() == 'rock' && playersMove() == 'rock':
//       tieMessage = 'tie'
//       break;

//     case computersMove() == 'paper' && playersMove() == 'paper':
//       tieMessage = 'tie'
//       break;

//     case computersMove() == 'scissors' && playersMove() == 'scissors':
//       tieMessage = 'tie'
//       break;
//   }
//   return tieMessage;
// }

// function gameRound(playerWinOptions, computerWinOptions, tieOptions) {
//   let winner;
//   if (playerWinOptions() == 'pWin') {
//     winner = 'player';
//   }else if (computerWinOptions() == 'cWin') {
//     winner = 'computer';
//   }else if (tieOptions() == 'tie') {
//     winner = 'tie';
//   }
//   return winner;
// }

// let getPlayerScore = function() {
//   let playerScore = 0;
//   if (gameRound() == 'player') {
//     playerScore ++;
//   }
//   return playerScore;
// }

// let getComputerScore = function() {
//   let computerScore = 0;
//   if (gameRound() == 'computer') {
//     computerScore ++;
//   }
//   return computerScore;
// }

