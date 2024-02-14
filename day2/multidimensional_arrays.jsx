// Creatign a 2D array representing a tic-tac-toe board
const board = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_']
];

//Function to print the tic-tac-toe board
function printBoard(board) {
  for (let row of board) {
    console.log(row.join(' '));
  }
}

// Function to access and print the value at a specific position on the board
function printValueAtPosition(board, row, col) {
  console.log("Value at position (" + row + ", " + col + "): " + board[row][col]);
}

// Function to update the value at a position and print the updated board
function updateValueAtPosition(board, row, col, value) {
  board[row][col] = value;
  console.log("Updated board:");
  printBoard(board);
}

// Print the initial board
console.log("Initial board:");
printBoard(board);

// Print the value at position (1, 1)
printValueAtPosition(board, 1, 1);

// Update the value at position (1, 1) to 'Z' and print the updated board
updateValueAtPosition(board, 1, 1, 'Z');