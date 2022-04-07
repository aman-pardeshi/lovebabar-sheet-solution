import fs from 'fs';

let input = fs.readFileSync('./18.input.txt', 'utf-8').split('\r\n');

let array1 = input[1].split(' ').map((x) => +x);
let array2 = input[2].split(' ').map((x) => +x);
let array3 = input[3].split(' ').map((x) => +x);

const commonElement = (arr1, arr2, arr3, n1, n2, n3) => {
  //
  let set1 = new Set(arr1);
  let common = new Set();
  let result = [];

  for (let i = 0; i < n2; i++) {
    if (set1.has(arr2[i])) {
      common.add(arr2[i]);
    }
  }

  for (let i = 0; i < n3; i++) {
    if (common.has(arr3[i])) {
      if (!result.includes(arr3[i])) result.push(arr3[i]);
    }
  }
  return result;
};

console.log(commonElement([1, 2, 3], [4, 5, 6], [7, 8, 9], 3, 3, 3));
console.log(commonElement([3, 3, 3], [3, 3, 3], [3, 3, 3], 3, 3, 3));
console.log(commonElement(array1, array2, array3, 15, 88, 48));
