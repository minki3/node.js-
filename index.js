const { odd, even } = require("./var");
const oddOrEven = require("./func");

const stringOddOrEven = (str) => {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
};

console.log(oddOrEven(4));
console.log(stringOddOrEven("안녕하세요"));
console.log(4 % 2);
