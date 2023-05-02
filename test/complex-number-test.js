const {deepStrictEqual} = require('assert');
const {describe, it} = require("node:test");

const {makeComplexNumber, addComplexNumbers} = require("../src/complex-number.js");

const firstNumber = makeComplexNumber(2, 3);
const secondNumber = makeComplexNumber(5, 4);

describe("getRealPart", function() {
  it("should give the real part of the complex number", function() {
    deepStrictEqual(firstNumber.getRealPart(), 2);
  });
});

describe("getImaginaryPart", function() {
  it("should give the imaginary part of the complex number", function() {
    deepStrictEqual(firstNumber.getImaginaryPart(), 3);
  });
});

describe("addComplexNumbers", function() {
  it("should give the sum of two complex number", function() {
    deepStrictEqual(addComplexNumbers(firstNumber, secondNumber), {real: 7, imaginary: 7});
  });
});
