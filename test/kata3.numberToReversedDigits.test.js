const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(1234)).toEqual([4, 3, 2, 1]);
    expect(numberToReversedDigits(4321)).toEqual([1, 2, 3, 4]);
    expect(numberToReversedDigits()).toBe(undefined);
    expect(numberToReversedDigits()).toBe(undefined);
  });
});
