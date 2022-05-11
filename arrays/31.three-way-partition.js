// Three way partitioning

const threeWayPartition = (arr, a, b) => {
  let start = 0,
    end = arr.length - 1;

  for (let i = 0; i <= end; ) {
    if (arr[i] < a) {
      let temp = arr[start];
      arr[start] = arr[i];
      arr[i] = temp;
      start++;
      i++;
    } else if (arr[i] > b) {
      let temp = arr[end];
      arr[end] = arr[i];
      arr[i] = temp;
      end--;
    } else {
      i++;
    }
  }
  return arr;
};

console.log(threeWayPartition([1, 2, 3, 3, 4], 1, 2));
