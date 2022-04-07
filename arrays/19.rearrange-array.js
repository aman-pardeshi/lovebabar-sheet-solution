const rearrange = (arr) => {
  // arr.sort((a, b) => a - b);
  let index = 0;
  let i = 0;

  while (i < arr.length) {
    if (i === 0 && arr[i] < 0) index += 2;
    else if (i === arr.length) break;
    else if (arr[i] < 0) {
      let temp = arr.splice(i, 1)[0];
      arr.splice(index, 0, 0);
      arr[index] = temp;
      index += 2;

      i < index ? i++ : '';
    }
    i++;
  }

  return arr;
};

console.log('1st input', rearrange([1, 2, 3, -4, -1, 4]));
console.log('2st input', rearrange([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));
console.log('3st input', rearrange([-2, 3, 4, -1]));
console.log('4st input', rearrange([-2, 3, 1]));
console.log('5st input', rearrange([-5, 3, 4, 5, -6, -2, 8, 9, -1, -4]));
