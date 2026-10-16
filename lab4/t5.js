'use strict';

const sum = (...args) => args.reduce((acc, val) => acc + val, 0);

console.dir(sum(1, 2, 3));