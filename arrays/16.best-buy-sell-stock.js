const maxProfit = (prices) => {
  // let profit = [];
  // for (let i = 0; i < prices.length; i++) {
  //   let entry = prices[i];

  //   let subArr = prices.slice(i + 1, prices.length);

  //   let exit = Math.max(...subArr);
  //   // console.log(i, entry, exit, subArr);
  //   if (exit - entry > 0) profit.push(exit - entry);
  // }

  // if (profit.length < 1) return 0;

  // return Math.max(...profit);

  let min = Math.pow(10, 1000);
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
};

console.log('Ans', maxProfit([7, 1, 5, 3, 6, 4]));
console.log('Ans', maxProfit([7, 6, 4, 3, 1]));
console.log('Ans', maxProfit([2, 4, 1]));
