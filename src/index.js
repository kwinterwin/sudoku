function findSolve(i, j, matrix) {
  if (i == 9) {
      i = 0;
      if (++j == 9)
          return true;
  }

  if (matrix[i][j] != 0)
      return findSolve(i + 1, j, matrix);

  for (var val = 1; val <= 9; val++) {
      if (findValue(i, j, val, matrix)) {
          matrix[i][j] = val;
          if (findSolve(i + 1, j, matrix))
              return true;
      }
  }
  matrix[i][j] = 0;
  return false;
}

function findValue(i, j, value, matrix) {

  for (var k = 0; k < 9; ++k)  // find in row
      if (value == matrix[k][j])
          return false;

  for (var k = 0; k < 9; ++k) // find in column
      if (value == matrix[i][k])
          return false;

  var boxRow = Math.floor((i / 3)) * 3;
  var boxColumn = Math.floor((j / 3)) * 3;

  for (var k = 0; k < 3; k++) // find in box
      for (var m = 0; m < 3; m++)
          if (value === matrix[boxRow + k][boxColumn + m])
              return false;

  return true; // no find this value
}


module.exports = function solveSudoku(matrix) {
  if (findSolve(0, 0, matrix))
  return matrix;
  else
  return "No find solution";
}
