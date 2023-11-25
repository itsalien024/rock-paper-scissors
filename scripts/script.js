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





