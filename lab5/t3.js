'use strict';

const sum = (...args) => {
  let result = 0;
  let i = 0;
  while (i < args.length) {
    result += args[i];
    i++;
  }
  return result;
};

console.dir(sum(1, 2, 3));