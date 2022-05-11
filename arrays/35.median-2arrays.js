// Finding Median of Two Sorted Arrays
const findMedian = (a1, a2) => {
  let n = a1.length;
  let m = a2.length;
  let arr = [];
  let i = 0,
    j = 0;

  let m1 = -1,
    m2 = -1;
  if ((m + n) % 2 === 1) {
    for (let count = 0; count <= (n + m) / 2; count++) {
      if (i !== n && j !== m) {
        m1 = a1[i] > a2[j] ? a2[j++] : a1[i++];
      } else if (i < n) {
        m1 = a1[i];
        i++;
      } else {
        m1 = a2[j];
        j++;
      }
    }
    return m1;
  } else {
    for (let count = 0; count <= (n + m) / 2; count++) {
      m2 = m1;
      if (i != n && j != m) {
        m1 = a1[i] > a2[j] ? a2[j++] : a1[i++];
      } else if (i < n) {
        m1 = a1[i];
        i++;
      } else {
        m1 = a2[j];
        j++;
      }
    }
    return (m1 + m2) / 2;
  }
};

console.log(findMedian([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]));
console.log(findMedian([900], [5, 8, 10, 20]));
