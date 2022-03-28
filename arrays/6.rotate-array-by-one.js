const rotate = (arr, n) => {
  //code here
  let temp = arr.pop();
  arr.unshift(temp);
  return arr;
};

console.log(rotate([1, 2, 3, 4, 5], 5));
