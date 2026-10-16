'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  return ip.split('.').reduce((acc, item) => (acc << 8) + parseInt(item, 10), 0);
};

console.dir(ipToInt('127.0.0.1'));
console.dir(ipToInt('10.0.0.1'));
console.dir(ipToInt('192.168.1.10'));
console.dir(ipToInt('165.225.133.150'));
console.dir(ipToInt('0.0.0.0'));