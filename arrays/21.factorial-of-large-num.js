const factorial = (n) => {
  //code here
  let res = new Array(500);
  res[0] = 1;
  let res_size = 1;

  for (let x = 2; x <= n; x++) {
    const multiply = (x, res, res_size) => {
      let carry = 0;
      for (let i = 0; i < res_size; i++) {
        let prod = res[i] * x + carry;
        res[i] = prod % 10;
        carry = Math.floor(prod / 10);
      }

      while (carry) {
        res[res_size] = carry % 10;
        carry = Math.floor(carry / 10);
        res_size++;
      }
      return res_size;
    };

    res_size = multiply(x, res, res_size);
  }

  let sol = [];
  console.log(res_size);
  for (let j = res_size - 1; j >= 0; j--) {
    sol.push(res[j]);
  }

  return sol;
};

console.log('Answer =', factorial(10));
