const {deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");

const {complexNumber} = require("../src/complex-number.js");

describe("getRealPart", function() {
  it("should give the real part of the complex number", function() {
    const a = complexNumber(2, 3)
    deepStrictEqual(a.realPart(), 2);
  });
});

describe("getImaginaryPart", function() {
  it("should give the imaginary part of the complex number", function() {
    const a = complexNumber(2, -3);
    deepStrictEqual(a.imaginaryPart(), -3);
  });
});

describe("add", function() {
  it("should give the sum of two complex number", function() {
    const a = complexNumber(0, -0);
    const b = complexNumber(5, 4);
    const sum = a.add(b);
    deepStrictEqual(sum.toString(), '5 + 4i');
  });
});

describe("multiply", function() {
  it("should give the product of two complex number", function() {
    const a = complexNumber(2, -3);
    const b = complexNumber(5, 4);
    const product = a.multiply(b);
    deepStrictEqual(product.toString(), '22 - 7i');
  });
});

