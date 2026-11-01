'use strict';

const compose = (...fns) => {
  const handlers = { error: null };

  const composed = (x) => {
    let result = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {
      if (handlers.error) {
        handlers.error(error);
      }
      return undefined;
    }
  };
  composed.on = (name, handler) => {
    if (name === 'error') {
      handlers.error = handler;
    }
  };

  return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const faulty = x => { throw new Error('Simulated error'); };

const f1 = compose(cube, twice, inc);
console.dir(f1(5));

const f2 = compose(cube, faulty, inc);
f2.on('error', e => console.dir('Caught error: ' + e.message));

const result = f2(5);
console.dir({ result });