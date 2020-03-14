const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa & Maggie");
    expect(
      joinNames([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "Flanders" },
        { name: "Maud" }
      ])
    ).toBe("Bart, Lisa, Maggie, Flanders & Maud");
    expect(joinNames([{ name: "Nelson" }])).toBe("Nelson");
    expect(joinNames([{ name: "Nelson" }, { name: "Millhouse" }])).toBe(
      "Nelson & Millhouse"
    );
  });
});
