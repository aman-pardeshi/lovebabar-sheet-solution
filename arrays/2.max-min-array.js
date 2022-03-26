const getMinMax = (arr, n) => {
  //code here
  arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]];
};

getMinMax([3, 2, 1, 56, 10000, 167]);
