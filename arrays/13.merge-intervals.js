const merge = (intervals) => {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  while (intervals.length > 1) {
    let temp = intervals.splice(0, 2);

    if (temp[0][1] >= temp[1][0]) {
      intervals.unshift([
        temp[0][0],
        temp[0][1] > temp[1][1] ? temp[0][1] : temp[1][1],
      ]);
    } else {
      intervals.unshift(temp[1]);
      intervals.unshift(temp[0]);

      let temp2 = intervals.shift();

      result.push(temp2);
    }
  }

  if (intervals.length > 0) result.push(intervals[0]);

  return result;
};

console.log(
  '1st test case',
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  '2st test case',
  merge([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  '3rd test case',
  merge([
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6],
  ])
);
