// Find the median
const find_median = (arr) => {
  arr.sort((a, b) => a - b);
  let median = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0)
    return Math.floor((arr[median] + arr[median - 1]) / 2);
  else return arr[median];
};

console.log(find_median([90, 100, 78, 89, 67]));
console.log(find_median([56, 67, 30, 79]));
