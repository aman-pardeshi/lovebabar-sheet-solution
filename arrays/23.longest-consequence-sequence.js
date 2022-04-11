const findLongestConseqSubseq = (arr, n) => {
  // code here
  arr.sort((a, b) => a - b);
  let set = new Set(arr);
  arr = [...set];
  console.log(arr, set);
  let count = 0;
  let result = [];

  for (let i = 1; i < n; i++) {
    // console.log(set[i]);
    if (arr[i] - arr[i - 1] === 1) {
      // console.log(arr[i - 1], arr[i]);
      count++;
    } else {
      result.push(count + 1);
      count = 0;
    }
  }
  result.push(count + 1);
  return Math.max(...result);
};

// console.log(findLongestConseqSubseq([2, 6, 1, 9, 4, 5, 3], 7));
// console.log(findLongestConseqSubseq([1, 9, 3, 10, 4, 20, 2], 7));
console.log(
  findLongestConseqSubseq(
    [6, 6, 2, 3, 1, 4, 1, 5, 6, 2, 8, 7, 4, 2, 1, 3, 4, 5, 9, 6],
    20
  )
);
