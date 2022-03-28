const maxSubarraySum = (arr, N) => {
  // code here
  let maxint = Math.pow(2, 53);
  let maxSoFar = -maxint - 1;
  console.log(maxSoFar);
  let maxEnding = 0;

  for (let i = 0; i < N; i++) {
    maxEnding = maxEnding + arr[i];
    if (maxSoFar < maxEnding) {
      maxSoFar = maxEnding;
    }

    if (maxEnding < 0) {
      maxEnding = 0;
    }
  }
  return maxSoFar;
};

console.log(maxSubarraySum([-1, -2, -3, -4], 4));
