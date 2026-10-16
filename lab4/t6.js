'use strict';

const max = (matrix) => {
  let maxValue = matrix[0][0];
  for (const row of matrix) {
    for (const val of row) {
      if (val > maxValue) {
        maxValue = val;
      }
    }
  }
  return maxValue;
};

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9