const numberToReversedDigits = number => {
  if (number) {
    return number
      .toString()
      .split("")
      .reverse()
      .map(Number);
  }

  return number;
};

module.exports = numberToReversedDigits;
