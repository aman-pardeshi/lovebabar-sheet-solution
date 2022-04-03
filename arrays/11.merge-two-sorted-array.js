function merge(arr1, arr2, N, M) {
  //your code here
  return arr1.concat(arr2).sort((a, b) => a - b);
}

let N = 2,
  M = 3;
let arr1 = [7, 9, 9, 10, 11, 11, 13, 14, 17, 19];
let arr2 = [1, 1, 4, 5, 8, 11, 13, 16, 19, 19];

console.log(merge(arr1, arr2, N, M));
