const nextPermutatin = (nums) => {
  let n = nums.length;

  if (n === 1) return;
  let i = 1;
  let lastInc = -1;

  while (i < n) {
    if (nums[i] > nums[i - 1]) {
      lastInc = i;
    }
    i++;
  }

  if (lastInc === -1) {
    nums.sort((a, b) => a - b);
    return nums;
  }

  // let mn = nums[lastInc];
  let index = lastInc;

  for (let i = lastInc; i < n; i++) {
    if (nums[i] > nums[lastInc - 1] && nums[i] < nums[index]) {
      index = i;
    }
  }
  [nums[lastInc - 1], nums[index]] = [nums[index], nums[lastInc - 1]];

  let temp = nums.splice(lastInc, n - lastInc);
  temp.sort((a, b) => a - b);

  temp.map((x) => nums.push(x));
  return nums;
};

console.log('1st input', nextPermutatin([1, 2, 3]));
console.log('2st input', nextPermutatin([3, 2, 1]));
console.log('3st input', nextPermutatin([1, 1, 5]));
