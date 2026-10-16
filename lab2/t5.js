'use strict';

const phonesArray = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Микита', phone: '+380996194400' },
  { name: 'Ivan', phone: '+380671234567' }
];

const findPhoneByNameArr = (name) => {
  for (const item of phonesArray) {
    if (item.name === name) return item.phone;
  }
};

console.dir(findPhoneByNameArr('Микита'));

const phonesHash = {
  'Marcus Aurelius': '+380445554433',
  'Микита': '+380996194400',
  'Ivan': '+380671234567'
};

const findPhoneByNameHash = (name) => phonesHash[name];

console.dir(findPhoneByNameHash('Marcus Aurelius'));