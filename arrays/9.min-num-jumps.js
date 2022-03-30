// My code
// const minJumps = (arr, n) => {
//   //code here
//   let current = arr[0],
//     count = 0,
//     index = 2;

//   current = arr[1];

//   for (let i = 0; i < n; i++) {
//     if (current === 0) return -1;

//     index += current;
//     current = arr[index - 1];
//     count++;

//     if (index >= n) {
//       return count;
//     }
//   }
// };

// const minJumps = (arr, n) => {
//   if (n <= 1) return 0;

//   // Return -1 if not possible to jump
//   if (arr[0] == 0) return -1;

//   // Stores the number of jumps necessary to reach that maximal reachable position.
//   let jump = 1;

//   // Stores the subarray last index
//   let subArrEndIndex = arr[0];

//   let i = 1;
//   // Maximum steps covers in
//   // first half of sub array
//   let subArrFistHalfMaxSteps = 0;

//   // Maximum steps covers
//   // in second half of sub array
//   let subArrSecondHalfMaxSteps = 0;

//   // Start traversing array
//   for (i = 1; i < n; ) {
//     subArrEndIndex = i + subArrEndIndex;

//     // Check if we have reached
//     // the end of the array
//     if (subArrEndIndex >= n) return jump;

//     let firstHalfMaxStepIndex = 0;

//     // Iterate the sub array
//     // and find out the maxsteps
//     // cover index

//     for (; i < subArrEndIndex; i++) {
//       let stepsCanCover = arr[i] + i;

//       if (subArrFistHalfMaxSteps < stepsCanCover) {
//         subArrFistHalfMaxSteps = stepsCanCover;

//         subArrSecondHalfMaxSteps = 0;

//         firstHalfMaxStepIndex = i;
//       } else if (subArrSecondHalfMaxSteps < stepsCanCover) {
//         subArrSecondHalfMaxSteps = stepsCanCover;
//       }
//     }

//     if (i > subArrFistHalfMaxSteps) return -1;

//     jump++;

//     // Next subarray end index
//     // and so far calculated sub
//     // array max step cover value
//     subArrEndIndex = arr[firstHalfMaxStepIndex];
//     subArrFistHalfMaxSteps = subArrSecondHalfMaxSteps;
//   }

//   return -1;
// };

// 3 attempt from YouTube

const minJumps = (arr, n) => {
  let max = arr[0];
  let step = arr[0];
  let count = 1;

  if (n == 1) return 0;
  else if (arr[0] == 0) return -1;

  for (let i = 1; i < n; i++) {
    if (i == n - 1) return count;

    max = Math.max(max, i + arr[i]);
    step--;
    if (step == 0) {
      count++;
      if (i >= max) {
        return -1;
      }
      step = max - i;
    }
  }
};

console.log(minJumps([2, 3, 1, 1, 2, 4, 2, 0, 1, 1], 10));

// [2, 3, 1, 1, 2, 4, 2, 0, 1, 1], 10 : answer => 4
