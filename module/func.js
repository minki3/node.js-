const { odd, even } = require("./var");

const oddOrEven = (number) => {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
};

module.exports = oddOrEven;
