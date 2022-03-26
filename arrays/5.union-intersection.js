import fs from 'fs';

const doUnion = (a, n, b, m) => {
  // first attempt
  // console.log(n, m);
  // if (n > m) {
  //   for (let i = 0; i < n; i++) {
  //     if (!a.includes(b[i])) {
  //       a.push(b[i]);
  //     }
  //   }
  //   return a.length - 1;
  // } else {
  //   for (let i = 0; i < m; i++) {
  //     if (!b.includes(a[i])) {
  //       console.log(a[i]);
  //       b.push(a[i]);
  //     }
  //   }
  //   return b.length - 1;
  // }
  // second attempt
  // let i = 0;
  // let j = 0;
  // let count = 0;
  // while (i < n && j < m) {
  //   if (a[i] < b[j]) {
  //     count++;
  //     i++;
  //   } else if (a[i] > b[j]) {
  //     count++;
  //     j++;
  //   } else {
  //     count++;
  //     i++;
  //     j++;
  //   }
  //   console.log(count, i, j);
  // }
  // while (i < n) {
  //   count++;
  //   i++;
  // }
  // while (j < m) {
  //   count++;
  //   j++;
  // }
  // console.log(count);
  // // return result.length;

  let s = new Set();
  for (let i = 0; i < n; i++) {
    s.add(a[i]);
  }
  for (let i = 0; i < m; i++) {
    s.add(b[i]);
  }
  console.log(s.size);
};

const input = fs.readFileSync('./5.input.txt', 'utf8').split('\r\n');
let n = input[0].split(' ')[0];
let m = input[0].split(' ')[1];
let arr1 = input[1].split(' ').map((x) => +x);
let arr2 = input[2].split(' ').map((x) => +x);

console.log(doUnion(arr1, +n, arr2, +m));
