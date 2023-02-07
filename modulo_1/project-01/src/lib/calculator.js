module.exports.sum = (firstNumber, secondNumber) => {
  const numberOne = parseInt(firstNumber);
  const numberTwo = parseInt(secondNumber);

  if (Number.isNaN(numberOne) || Number.isNaN(numberTwo)) {
    throw new Error('Please check the input value');
  }
  return parseInt(firstNumber) + parseInt(secondNumber);
};

module.exports.minus = (firstNumber, secondNumber) => {
  const numberOne = parseInt(firstNumber);
  const numberTwo = parseInt(secondNumber);

  if (Number.isNaN(numberOne) || Number.isNaN(numberTwo)) {
    throw new Error('Please check the input value');
  }
  return parseInt(firstNumber) - parseInt(secondNumber);
};

module.exports.divide = (firstNumber, secondNumber) => {
  const numberOne = parseInt(firstNumber);
  const numberTwo = parseInt(secondNumber);

  if (Number.isNaN(numberOne) || Number.isNaN(numberTwo)) {
    throw new Error('Please check the input value');
  }
  return parseInt(firstNumber) / parseInt(secondNumber);
};

module.exports.multiply = (firstNumber, secondNumber) => {
  const numberOne = parseInt(firstNumber);
  const numberTwo = parseInt(secondNumber);

  if (Number.isNaN(numberOne) || Number.isNaN(numberTwo)) {
    throw new Error('Please check the input value');
  }
  return parseInt(firstNumber) * parseInt(secondNumber);
};
