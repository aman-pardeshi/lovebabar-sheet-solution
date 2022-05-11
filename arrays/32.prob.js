// Minimum swaps and K together
const minSwap = (arr, n, k) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= k) count++;
  }

  let bad = 0;
  for (let i = 0; i < count; i++) {
    if (arr[i] > k) bad++;
  }

  let res = bad;
  for (let i = 0, j = count; j < n; i++, j++) {
    if (arr[i] > k) bad--;

    if (arr[j] > k) bad++;

    res = Math.min(res, bad);
  }

  return res;
};

console.log(minSwap([2, 1, 5, 6, 3], 5, 3));
console.log(minSwap([2, 7, 9, 5, 8, 7, 4], 7, 6));
console.log(minSwap([10, 12, 20, 20, 5, 19, 19, 12, 1, 20, 1], 11, 1));
