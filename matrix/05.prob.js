// Sorted matrix
const sortedMatrix = (Mat, N) => {
  if (N === 1) return Mat;
  let temp = [];

  for (let i = 0; i < Mat.length; i++) {
    temp.push(...Mat[i]);
  }

  console.log('temp', temp);
  temp.sort((a, b) => a - b);
  console.log('sortedTemp', temp);
  let result = [];

  for (let i = 0; i < N; i++) {
    result.push(temp.splice(0, N));
  }
  return result;
};

console.log(
  sortedMatrix(
    [
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [27, 29, 37, 48],
      [32, 33, 39, 50],
    ],
    4
  )
);
