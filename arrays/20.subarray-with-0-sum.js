const subArrayExist = (arr) => {
  let set = new Set();
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0 || set.has(sum)) {
      console.log(sum, set);
      return true;
    }

    set.add(sum);
    console.log(sum, set);
  }
  return false;
};

console.log(subArrayExist([4, 2, -3, 1, 6]));
console.log(subArrayExist([4, 2, 0, 1, 6]));
