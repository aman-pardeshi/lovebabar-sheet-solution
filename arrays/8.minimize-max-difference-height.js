const getMinDiff = (arr, N, K) => {
  arr.sort((a, b) => a - b);
  let result = arr[N - 1] - arr[0];

  let max, min;

  for (let i = 0; i < N; i++) {
    min = Math.min(arr[0] + K, arr[i] - K);
    max = Math.max(arr[i] + K, arr[N - 1] - K);

    result = Math.min(result, max - min);
  }
  return result;
};

console.log(getMinDiff([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 10, 5));
// 9
// 6
// 5
