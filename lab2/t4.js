'use strict';

const fn = () => {
  const obj1 = { name: 'First' };
  let obj2 = { name: 'Second' };

  obj1.name = 'Changed First';
  obj2.name = 'Changed Second';

  // obj1 = { name: 'New First' }; // викличе помилку (TypeError: Assignment to constant variable)
  obj2 = { name: 'New Second' };

  console.dir({ obj1, obj2 });
};

fn();

const createUser = (name, city) => ({ name, city });

console.dir(createUser('Marcus Aurelius', 'Roma'));