const calPoints = (ops) => {
  let res = [];

  for (let i = 0; i < ops.length; i++) {
    if (!isNaN(+ops[i])) {
      res.push(+ops[i]);
    } else if (ops[i] === 'C') {
      res.pop();
    } else if (ops[i] === 'D') {
      res.push(res[res.length - 1] * 2);
    } else if (ops[i] === '+') {
      res.push(res[res.length - 1] + res[res.length - 2]);
    }
  }
  console.log(res);
  return res.reduce((sum, num) => num + sum);
};

console.log(calPoints(['5', '2', 'C', 'D', '+']));
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
