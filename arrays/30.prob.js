// Smallest subarray with sum greater than a given value

const smallestSubWithSum = (arr, n, x) => {
  let minLength = n + 1;
  let curSum = 0,
    start = 0,
    end = 0;

  while (end < n) {
    while (curSum <= x && end < n) {
      curSum += arr[end];
      end++;
    }

    while (curSum > x && start < n) {
      if (end - start < minLength) minLength = end - start;
      curSum = curSum - arr[start];
      start++;
    }
  }

  if (minLength > arr.length) return 0;
  return minLength;
};

console.log(smallestSubWithSum([1, 4, 45, 6, 0, 19], 6, 51));
console.log(smallestSubWithSum([1, 10, 5, 2, 7], 5, 9));
console.log(smallestSubWithSum([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 10, 280));
console.log(smallestSubWithSum([1, 2, 4], 3, 8));
