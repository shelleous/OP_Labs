'use strict';

const incObj = (num) => {
  num.n += 1;
};

const obj = { n: 5 };
incObj(obj);
console.dir(obj);