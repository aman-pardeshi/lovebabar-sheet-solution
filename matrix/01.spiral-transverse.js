// Spirally traversing a matrix
// k - starting row index => start
// m - ending row index => end-r
// l - starting column index => left
// n - ending column index => c

const spirallyTraverse = (matrix, r, c) => {
  let arr = [];
  let start = 0,
    left = 0,
    i = 0;

  while (start <= r && left <= c) {
    for (i = left; i < c; i++) {
      arr.push(matrix[start][i]);
    }
    start++;

    for (i = start; i < r; i++) {
      arr.push(matrix[i][c - 1]);
    }
    c--;

    if (start < r) {
      for (i = c - 1; i >= left; i--) {
        arr.push(matrix[r - 1][i]);
      }
      r--;
    }

    if (left < c) {
      for (i = r - 1; i >= start; i--) {
        arr.push(matrix[i][left]);
      }
      left++;
    }
  }

  return arr;
};

console.log(
  spirallyTraverse(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    4,
    4
  )
);

console.log(
  spirallyTraverse(
    [
      [5, 11, 30],
      [5, 19, 19],
    ],
    2,
    3
  )
);
