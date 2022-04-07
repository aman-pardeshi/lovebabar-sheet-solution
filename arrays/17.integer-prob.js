const getPairsCount = (arr, n, k) => {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (map.has(k - arr[i])) {
      count += map.get(k - arr[i]);
    }

    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
    console.log(i, map);
  }

  return count;
};

console.log('ans', getPairsCount([1, 5, 7, 1], 4, 6));
console.log('ans', getPairsCount([1, 1, 1, 1], 4, 2));
