// Search a 2D Matrix
const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    let len = matrix[i].length;

    if (matrix[i][len - 1] >= target) {
      for (let j = 0; j < len; j++) {
        if (matrix[i][j] === target) return true;
      }
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(searchMatrix([1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60], 13));
