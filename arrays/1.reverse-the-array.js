const reverseWord = (str) => {
  let result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
    console.log(str[i]);
  }

  return result.join('');
};

console.log(reverseWord('ZRNKJZFPZWSOQCPKEKXJNL'));
