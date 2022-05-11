// Median in a row-wise sorted Matrix
const median = (matrix, r, c) => {
  let res = matrix.flat().sort((a, b) => a - b);
  let med = Math.floor(res.length / 2);

  if (res.length < 2) {
    return res;
  } else if (res.length % 2 !== 0) {
    return res[med];
  } else {
    return Math.floor(res[med] + res[med - 1]);
  }
};

console.log(
  median(
    [
      [1, 3, 5],
      [2, 6, 9],
      [3, 6, 9],
    ],
    3,
    3
  )
);

console.log(median([[1], [2], [3]], 3, 1));
