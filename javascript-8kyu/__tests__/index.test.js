const { repeatStr } = require("./../index");

describe("01 - String repeat", () => {
  test.only("basic tests", () => {
    expect(repeatStr(6, "I")).toBe("IIIIII");
    expect(repeatStr(5, "Hello")).toBe("HelloHelloHelloHelloHello");
    expect(repeatStr(2, "ha ")).toBe("ha ha ");
  });
});
