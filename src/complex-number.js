const makeComplexNumber = function(real, imaginary) {
  const number = {real, imaginary};
  const getRealPart = function() {
    return number.real;
  };

  const getImaginaryPart = function() {
    return number.imaginary;
  };

  return {getRealPart, getImaginaryPart};
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
