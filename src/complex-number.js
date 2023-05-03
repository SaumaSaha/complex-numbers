const complexNumber = function(real, imaginary) {
  const realPart = function() {
    return real;
  };

  const imaginaryPart = function() {
    return imaginary;
  };

  const toString = function() {
    if(imaginary === 0) return `${real}`;
    if(real === 0) return `${imaginary}i`;

    const sign = imaginary < 0 ? '-' : '+';

    return `${real} ${sign} ${Math.abs(imaginary)}i`;
  };

  const add = function(augend) {
    const realResult = real + augend.realPart();
    const imaginaryResult = imaginary + augend.imaginaryPart();

    return complexNumber(realResult, imaginaryResult);
  };

  const multiply = function(multiplicand) {
    const mcr = multiplicand.realPart();
    const mci = multiplicand.imaginaryPart();

    const realResult =  mcr * real - mci * imaginary;
    const imaginaryResult = mcr * imaginary + mci * real;

    return complexNumber(realResult, imaginaryResult);
  };

  return {realPart, imaginaryPart, toString, add, multiply};
};

exports.complexNumber = complexNumber;
