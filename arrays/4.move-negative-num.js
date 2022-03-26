const movingNeg = (arr) => {
  let neg = [],
    pos = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg.push(arr[i]);
    } else {
      pos.push(arr[i]);
    }
  }
  return neg.concat(pos);
};

console.log(movingNeg([-12, 11, -13, -5, 6, -7, 5, -3, -6]));
