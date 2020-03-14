const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival, using KM and KM/HR", () => {
    expect(reachDestination(100, 200)).toBe("I will arrive in 30 minutes");
    expect(reachDestination(100, 100)).toBe("I will arrive in 60 minutes");
  });
});
