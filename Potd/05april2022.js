const countShare = (b) => {
  if (b < 4) return 0;

  let len = Math.floor((b - 2) / 2);
  console.log(len);
  const factorial = (n) => {
    if (n == 0 || n == 1) return 1;
    else return n + factorial(n - 1);
  };

  let ans = factorial(len);
  return ans;
};

console.log(countShare(5));
