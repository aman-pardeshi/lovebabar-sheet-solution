// Chocolate Distribution Problem
const findMinDiff = (arr, n, m) => {
  arr.sort((a, b) => a - b);

  let i = 0,
    j = m - 1;
  let min = arr[n - 1];
  while (j < n) {
    min = Math.min(min, arr[j] - arr[i]);
    i++;
    j++;
  }
  return min;
};

console.log(findMinDiff([3, 4, 1, 9, 56, 7, 9, 12], 8, 5));
console.log(findMinDiff([7, 3, 2, 4, 9, 12, 56], 7, 3));
