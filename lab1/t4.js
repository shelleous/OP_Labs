'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, [], {}, function() {}];
const typesCount = {};

for (const item of arr) {
  const type = typeof item;
  let count = typesCount[type] || 0;
  typesCount[type] = count + 1;
}
console.dir(typesCount);