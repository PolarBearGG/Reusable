'use strict';

const range = (start, end) => {
  const arr = [];
  for (let i = 0; i <= end - start; i++) {
    if ((start + i) % 2 === 1) {
      arr[i] = start + i;
    }
  }
  return arr.filter(Number);
};
range(15, 30);

module.exports = { range };

