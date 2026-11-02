'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const expectedType = types[i].name.toLowerCase();
    
    if (typeof arg !== expectedType) {
      throw new TypeError(`Argument ${i} type expected ${expectedType}`);
    }
  }
  
  const result = fn(...args);
  const expectedReturnType = types[types.length - 1].name.toLowerCase();
  
  if (typeof result !== expectedReturnType) {
    throw new TypeError(`Result type expected ${expectedReturnType}`);
  }
  
  return result;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);