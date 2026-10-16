'use strict';

const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => x ** 3;

const calculate = () => {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    results.push(average(sq, cb));
  }
  return results;
};

console.dir(calculate());