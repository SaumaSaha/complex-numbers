const makeComplexNumber = function(real, imaginary) {
  const getRealPart = function() {
    return real;
  };

  const getImaginaryPart = function() {
    return imaginary;
  };

  return {getRealPart, getImaginaryPart};
};

const complexNumber = makeComplexNumber(1, 3);

exports.complexNumber = complexNumber;
