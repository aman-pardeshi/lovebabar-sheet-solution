const inversionCount = (arr, N) => {
  const mergeCount = (arr, l, m, r) => {
    let left = [];
    for (let i = l; i < m; i++) {
      left.push(arr[i]);
    }

    let right = [];
    for (let i = m + 1; i < r + 1; i++) {
      right.push(arr[i]);
    }

    let i = 0,
      j = 0,
      k = l,
      swap = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) arr[k++] = left[i++];
      else {
        arr[k++] = right[j++];
        swap += m + 1 - (l + i);
      }
    }

    while (i < left.length) {
      arr[k++] = left[i++];
    }
    while (j < right.length) {
      arr[k++] = right[j++];
    }

    return swap;
  };

  const mergeSort = (arr, l, r) => {
    let count = 0;

    if (l < r) {
      let m = Math.floor((l + r) / 2);
      count += mergeSort(arr, l, m);
      count += mergeSort(arr, r + 1, m);
      count += mergeCount(arr, l, m, r);
    }
    return count;
  };

  return mergeSort(arr, 0, arr.length - 1);
};

console.log(inversionCount([2, 4, 1, 3, 5], 5));
console.log(inversionCount([2, 3, 4, 5, 6], 5));
console.log(inversionCount([10, 10, 10], 3));
console.log(inversionCount([1, 20, 6, 4, 5], 5));
