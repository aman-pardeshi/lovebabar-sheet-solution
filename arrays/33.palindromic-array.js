// Palindromic Array
const PalinArray = (arr, n) => {
  for (let j = 0; j < arr.length; j++) {
    let x = arr[j].toString().split('');
    let len = x.length;

    for (let i = 0; i <= len; i++) {
      console.log(x[i], x[len - 1]);

      if (x[i] !== x[len - 1]) return 0;
      len--;
    }
  }

  return 1;
};

console.log(PalinArray([111, 222, 333, 444, 555], 5));
console.log(PalinArray([121, 131, 20], 3));
