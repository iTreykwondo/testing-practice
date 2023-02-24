import calculator from "../calculator";

test("Should add two numbers", () => {
  expect(calculator.add(1, 1)).toEqual(2);
});

test("Should subtract two numbers", () => {
  expect(calculator.subtract(1, 1)).toEqual(0);
});

test("Should multiply two numbers", () => {
  expect(calculator.multiply(2, 2)).toEqual(4);
});

test("Should divide two numbers", () => {
  expect(calculator.divide(6, 3)).toEqual(2);
});

test("Should return zero if dividing by zero", () => {
  expect(calculator.divide(0, 3)).toEqual(0);
});

test("Should return an error if second param is zero", () => {
  expect(calculator.divide(3, 0)).toEqual("Error");
});
