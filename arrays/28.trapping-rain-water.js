// Trapping rain water problem
const trappingWater = (arr, n) => {
  let start = 0,
    end = n - 1;
  let leftMax = 0,
    rightMax = 0;
  let fill = 0;

  while (start <= end) {
    if (arr[start] < arr[end]) {
      if (arr[start] > leftMax) {
        leftMax = arr[start];
      } else {
        fill += leftMax - arr[start];
      }
      start++;
    } else {
      if (arr[end] > rightMax) {
        rightMax = arr[end];
      } else {
        fill += rightMax - arr[end];
      }
      end--;
    }
  }
  return fill;
};

console.log(trappingWater([3, 0, 0, 2, 0, 4], 6));
console.log(trappingWater([7, 4, 0, 9], 4));
console.log(trappingWater([6, 9, 9], 3));
console.log(trappingWater([8, 8, 2, 4, 5, 5, 1], 7));
console.log(trappingWater([1, 1, 5, 2, 7, 6, 1, 4, 2, 3], 10));
