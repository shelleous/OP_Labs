'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  
  let result = 0;
  let i = 0;
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  
  return result;
};

console.dir(sum(1, 2, 3));
console.dir(sum());