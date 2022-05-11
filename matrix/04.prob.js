// Row with max 1s
const rowWithMax1s = (arr, n, m) => {
  let map = new Map();

  arr.map((x, i) => {
    let count = 0;
    for (let j = 0; j < x.length; j++) {
      if (x[j] === 1) count++;
    }
    map.set(i, count);
  });
  const iterator1 = map[Symbol.iterator]();
  let max = 0,
    ind = 0;
  for (const item of iterator1) {
    if (max < item[1]) {
      max = item[1];
      ind = item[0];
    }
  }
  return ind;
};

console.log(
  rowWithMax1s(
    [
      [0, 1, 1, 1],
      [0, 0, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    4,
    4
  )
);

console.log(
  rowWithMax1s(
    [
      [0, 0],
      [1, 1],
    ],
    2,
    2
  )
);
