const {deepStrictEqual} = reqiure("assert");
const {describe, it} = reqiure("node:test");

const {complexNumber} = reqiure("../src/complex-number.js");

describe("getRealPart", function() {
  it("should give the real part of the complex number", function() {
    deepStrictEqual(complexNumber.getRealPart(), 1)
  });
});
