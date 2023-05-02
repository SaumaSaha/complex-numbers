const {deepStrictEqual} = require('assert');
const {describe, it} = require("node:test");

const {complexNumber} = require("../src/complex-number.js");

describe("getRealPart", function() {
  it("should give the real part of the complex number", function() {
    deepStrictEqual(complexNumber.getRealPart(), 1)
  });
});

describe("getImaginaryPart", function() {
  it("should give the imaginary part of the complex number", function() {
    deepStrictEqual(complexNumber.getImaginaryPart(), 3)
  });
});
