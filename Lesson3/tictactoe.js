let readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_WINS = 5;
const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
];
function prompt(text) {
  console.log('=> ' + text);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for(let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function playerChoosesSquare(board) {
  let squareNum;
  
  while(true) {
    prompt('Choose square ' + joinOr(emptySquares(board)));
    squareNum = readline.question().trim();

    if(emptySquares(board).includes(squareNum))
      break;
    
      prompt('Invalid choice. Try again.');
  }

  board[squareNum] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let squareNum = emptySquares(board)[randomIndex];
  board[squareNum] = COMPUTER_MARKER;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function fullBoard(board) {
  return emptySquares(board).length === 0;
}

function win(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  

  for (let i = 0; i < WINNING_LINES.length; i++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[i];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function joinOr(arr, delim = ', ', lastDelim = 'or') {
  if(arr.length === 1)
    return arr;
  else if(arr.length === 2)
    return `${arr[0]} ${lastDelim} ${arr[1]}`;
  
  tempArr = arr.slice();
  tempArr[arr.length - 1] = lastDelim + ' ' + tempArr[arr.length - 1];
  return tempArr.join(delim);
}

function matchScoreTracker(winner) {
  if(winner === 'Player')
    matchWins['playerWins'] += 1;
  else if(winner === 'Computer')
    matchWins['pcWins'] += 1;
}

//tracking matches
let matchWins = {playerWins : 0, pcWins : 0};

//main game loop
while(true) {
  let board = initializeBoard();
  while(true) {
    displayBoard(board);
  
    playerChoosesSquare(board);
    if(fullBoard(board) || win(board))
    break;
  
    computerChoosesSquare(board);
    if(fullBoard(board) || win(board))
    break;
  }
  
  displayBoard(board);
  
  if (win(board)) {
    prompt(`${detectWinner(board)} won!`);
    matchScoreTracker(detectWinner(board));
  } 
  else {
    prompt("It's a tie!");
  }

  //Code for checking if someone one a series
  if(matchWins.playerWins >= MATCH_WINS) {
    prompt('The Player wins the series!');
    matchWins.playerWins = 0;
    matchWins.pcWins = 0;
  }
  if(matchWins.pcWins >= MATCH_WINS) {
    prompt('The Computer wins the series!');
    matchWins.playerWins = 0;
    matchWins.pcWins = 0;
  }

  prompt('Play again? y/n:');
  let ans = readline.question();
  if(ans !== 'y')
    break;
}

prompt('Thank you for playing!');

