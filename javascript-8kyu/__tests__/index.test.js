const { repeatStr, isVow } = require("./../index");

describe("01 - String repeat", () => {
  test("basic tests", () => {
    expect(repeatStr(6, "I")).toBe("IIIIII");
    expect(repeatStr(5, "Hello")).toBe("HelloHelloHelloHelloHello");
    expect(repeatStr(2, "ha ")).toBe("ha ha ");
  });
});

describe("02 - Is there a vowel in there?", () => {
  test("should return a new array and not mutate input array", () => {
    const input = [1, 2, 3];
    const result = isVow(input);
    expect(result).not.toBe(input);
  });
  test("should return a copy of input array if no vowel code is found", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect([
      118, 120, 121, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106,
    ]).toEqual([
      118, 120, 121, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106,
    ]);
  });
  test("should return an array with number replace with a vowel string if number matches vowel character code", () => {
    expect(
      isVow([
        118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
        120, 106,
      ])
    ).toEqual([
      118,
      "u",
      120,
      121,
      "u",
      98,
      122,
      "a",
      120,
      106,
      104,
      116,
      113,
      114,
      113,
      120,
      106,
    ]);
    expect(
      isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103])
    ).toEqual(["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103]);
  });
});
