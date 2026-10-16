'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, [], {}, function() {}];
const typesCount = { number: 0, string: 0, boolean: 0 };

for (const item of arr) {
  const type = typeof item;
  if (type in typesCount) {
    typesCount[type]++;
  }
}
console.dir(typesCount);