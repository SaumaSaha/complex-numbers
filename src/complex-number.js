const makeComplexNumber = function(real, imaginary) {
  const getRealPart = function() {
    return real;
  };

  const getImaginaryPart = function() {
    return imaginary;
  };

  return {getRealPart, getImaginaryPart};
};

const addComplexNumbers = function(addend, augend) {
  let real = 0;
  let imaginary = 0;

  real = addend.getRealPart() + augend.getRealPart();
  imaginary = addend.getImaginaryPart() + augend.getImaginaryPart();

  return {real, imaginary};
};

exports.makeComplexNumber = makeComplexNumber;
exports.addComplexNumbers = addComplexNumbers;
