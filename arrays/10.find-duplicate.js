import fs from 'fs';

const findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
};

const input = fs
  .readFileSync('./10.input.txt', 'utf-8')
  .split(',')
  .map((x) => +x);

console.log(typeof input);

console.log(findDuplicate(input));
