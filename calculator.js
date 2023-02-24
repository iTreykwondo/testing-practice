const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    if (a === 0) {
      return 0;
    }

    if (b === 0) {
      return "Error";
    }

    return parseFloat(a) / parseFloat(b);
  },
};

module.exports = calculator;
