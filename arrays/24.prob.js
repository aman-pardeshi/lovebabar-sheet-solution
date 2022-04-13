const moreThan = (arr, n, k) => {
  let num = n / k;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      let temp = map.get(arr[i]);
      temp++;
      map.set(arr[i], temp);
    }
  }

  let res = [];
  const iterator1 = map[Symbol.iterator]();
  for (const item of iterator1) {
    if (item[1] > num) res.push(item[0]);
  }

  return res.sort((a, b) => a - b);
};

console.log(moreThan([3, 1, 2, 2, 1, 2, 3, 3], 8, 4));
