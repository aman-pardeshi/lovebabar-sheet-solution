// Triplet sum in Array

const findThreeNum = (a, n, x) => {
  let set = new Set(a.sort((a, b) => a - b));

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = x - a[i] - a[j];
      if (set.has(temp) && temp > a[j]) {
        return true;
      }
    }
  }
};

console.log(findThreeNum([1, 4, 45, 6, 10, 8], 6, 13));
console.log(findThreeNum([1, 2, 4, 3, 6], 5, 10));
