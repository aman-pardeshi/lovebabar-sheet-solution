const maxProduct = (arr, n) => {
  // let maxEnding = 1;
  // let minEnding = 1;
  // let maxSoFar = 0;
  // let flag = 0;

  // for (let i = 0; i < n; i++) {
  //   if (arr[i] > 0) {
  //     maxEnding = maxEnding * arr[i];
  //     minEnding = Math.min(minEnding * arr[i], 1);
  //     flag = 1;
  //   } else if (arr[i] === 0) {
  //     maxEnding = 1;
  //     minEnding = 1;
  //   } else {
  //     let temp = maxEnding;
  //     maxEnding = Math.max(minEnding * arr[i], 1);
  //     minEnding = temp * arr[i];
  //   }

  //   if (maxSoFar < maxEnding) maxSoFar = maxEnding;
  // }

  // if (flag == 0 && maxSoFar === 0) {
  //   return 0;
  // }
  // return maxSoFar;

  let ma = 1;
  let mi = 1;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      [ma, mi] = [mi, ma];
    }

    ma = Math.max(ma * arr[i], arr[i]);
    mi = Math.min(mi * arr[i], arr[i]);

    if (ans < ma) ans = ma;
  }
  return ans;
};

console.log(maxProduct([6, -3, -10, 0, 2], 5));
console.log(maxProduct([2, 3, 4, 5, -1, 0], 6));
