'use strict';

const sum = (...args) => {
  let result = 0;
  for (const item of args) {
    result += item;
  }
  return result;
};

console.dir(sum(1, 2, 3));