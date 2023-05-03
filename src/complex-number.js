const makeComplexNumber = function(real, imaginary) {
  const number = {real, imaginary};
  const getRealPart = function() {
    return number.real;
  };

  const getImaginaryPart = function() {
    return number.imaginary;
  };

  const toString = function() {
    let sign = '+';
    if(number.imaginary === 0) {
      return `${real}`;
    }

    if(number.real === 0) {
      return `${imaginary}i`;
    }

    if(imaginary < 0) {
      sign = '-';
    }

    return `${real} ${sign} ${Math.abs(imaginary)}i`;

  };

  return {getRealPart, getImaginaryPart, toString};
};

const addComplexNumbers = function(addend, augend) {
  let real = 0;
  let imaginary = 0;

  real = addend.getRealPart() + augend.getRealPart();
  imaginary = addend.getImaginaryPart() + augend.getImaginaryPart();

  const sum = makeComplexNumber(real, imaginary);

  return sum;
};

const multiplyComplexNumbers = function(multiplier, multiplicand) {
  let real = 0;
  let imaginary = 0;

  const multiplicandRealPart = multiplicand.getRealPart();
  const multiplicandImaginaryPart = multiplicand.getImaginaryPart();
  const multiplierRealPart = multiplier.getRealPart();
  const multiplierImaginaryPart = multiplier.getImaginaryPart();

  real =  multiplicandRealPart * multiplierRealPart - multiplicandImaginaryPart * multiplierImaginaryPart;
  imaginary = multiplicandRealPart * multiplierImaginaryPart + multiplicandImaginaryPart * multiplierRealPart;

  const product = makeComplexNumber(real, imaginary);
  return product;
};

exports.makeComplexNumber = makeComplexNumber;
exports.addComplexNumbers = addComplexNumbers;
exports.multiplyComplexNumbers = multiplyComplexNumbers;
