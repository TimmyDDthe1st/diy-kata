const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("given human years, returns an array with human years, cat years and dog years", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears()).toEqual([0, 0, 0]);
    expect(humanCatDogYears("59")).toEqual([0, 0, 0]);
    expect(humanCatDogYears(null)).toEqual([0, 0, 0]);
    expect(humanCatDogYears(undefined)).toEqual([0, 0, 0]);
  });
});
