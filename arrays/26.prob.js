// Array subset of another array

const inSubset = (a1, a2) => {
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  while (i < a1.length && j < a2.length) {
    if (a2[j] === a1[i]) {
      i++;
      j++;
    } else {
      i++;
    }
  }

  if (j === a2.length) {
    return true;
  } else {
    return false;
  }
};

console.log(inSubset([11, 1, 13, 21, 3, 7], [11, 3, 7, 1]));
console.log(inSubset([1, 2, 3, 4, 5, 6], [1, 2, 4]));
console.log(inSubset([10, 5, 2, 23, 19], [19, 5, 3]));
