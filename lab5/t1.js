'use strict';

const sum = (...args) => {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};

console.dir({
  a: sum(1, 2, 3),
  b: sum(0),
  c: sum(),
  d: sum(1, -1, 1),
  e: sum(10, -1, -1, -1)
});