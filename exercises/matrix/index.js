// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   const matrix = [];
//   for (let i = 0; i < n; i++) {
//     matrix.push([]);
//   }
//   const max = n*n;

//   let counter = 1;
//   let startCol = 0;
//   let startRow = 0;
//   let endCol = n-1;
//   let endRow = n-1;

//   while (counter <= max) {
//     // top row
//     for (let i = startCol; i <= endCol; i++) {
//       matrix[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;
//     // right column
//     for (let i = startRow; i <= endRow; i++) {
//       matrix[i][endCol] = counter;
//       counter++;
//     }
//     endCol--;
//     // bottom row
//     for (let i = endCol; i >= startCol; i--) {
//       matrix[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;
//     // start column
//     for (let i = endRow; i >= startRow; i--) {
//       matrix[i][startCol] = counter;
//       counter++;
//     }
//     startCol++;
//   }
//   console.log(matrix);
//   return matrix;
// }

const matrix = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const subArray = new Array(n);
    result.push(subArray);
  }
  // create startCol, endCol, startRow, endRow
  // create counterVar
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  let counter = 1;
  // while starCol is less than or equal to endCol and startRow <= endRow
  while (startCol <= endCol && startRow <= endRow) {
    // loop from start to end col
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // loop from startRow to end row
    for (let i = startRow; i <= endRow; i++) {
      // at results[i][endCol] assign counter
      result[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // loop from end to start row
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // loop from end to start row
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  console.log(result);
  return result;
}

module.exports = matrix;
