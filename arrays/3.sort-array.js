// Sorting array of zero, one and two

const sort012 = (arr, N) => {
  //your code here
  let zeros = [];
  let ones = [];
  let twos = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else if (arr[i] === 1) {
      ones.push(arr[i]);
    } else {
      twos.push(arr[i]);
    }
  }

  let result = zeros.concat(ones).concat(twos);
  return result;
};

console.log(sort012([0, 2, 1, 2, 0]));

// Alternate solutions given by geekforgeek not able to understand
// how they are return from the function
// sort012(arr, N);
// {
//   //your code here
//   let low = 0,
//     high = N - 1,
//     mid = 0;
//   while (mid <= high) {
//     if (arr[mid] == 0) {
//       let temp = arr[low];
//       arr[low] = arr[mid];
//       arr[mid] = temp;
//       low++;
//       mid++;
//     } else if (arr[mid] == 1) {
//       mid++;
//     } else {
//       let temp = arr[mid];
//       arr[mid] = arr[high];
//       arr[high] = temp;
//       high--;
//     }
//   }
// }
