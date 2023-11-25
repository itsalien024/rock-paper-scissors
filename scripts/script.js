function computersMove(num) {
  num = 3;
  let choice;
  let result;
  result = Math.floor(Math.random() * num);
  
  if (result == 0) {
    choice = 'rock';
  } else if (result == 1) {
    choice = 'paper';
  } else if (result == 2) {
    choice = 'scissors'
  }
  return choice;
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



