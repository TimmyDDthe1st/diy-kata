const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('should return Yes if True is passed in', () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
    expect(booleanToWord()).toBe("No");
    expect(booleanToWord(2)).toBe("Yes");
    expect(booleanToWord(null)).toBe("No");
  });
});
