const LCP = (arr) => {
  let count = 0;
  let sol = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i - 1][j] === arr[i][j]) {
        count++;
      } else {
        sol.push(count);
        count = 0;
        break;
      }
    }
  }

  let min = Math.min(...sol);
  let res = '';
  for (let i = 0; i < min; i++) {
    res += arr[0][i];
  }

  return res;
  // }
};

console.log(LCP(['geeksforgeeks', 'geeks', 'geek', 'geezer']));
console.log(LCP(['apple', 'ape', 'april']));
