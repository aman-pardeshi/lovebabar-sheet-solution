const getMinDiff = (arr, n, k) => {
  arr.sort((a, b) => a - b);

  let min = arr[0];
  let max = arr[n - 1];
  let result = max - min;

  for (let i = 1; i < n; i++) {
    min = Math.min(arr[0] + k, arr[i] - k);
    max = Math.max(arr[i - 1] + k, arr[n - 1] - k);

    if (min < 0) continue;

    result = Math.min(result, max - min);
  }
  return result;
};

console.log(getMinDiff([1, 5, 8, 10], 4, 2));

// [2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 10, 5 --ans: 7
//
// 5
