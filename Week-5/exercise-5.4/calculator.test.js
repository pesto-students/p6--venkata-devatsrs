const mathOperations = require("./app");

describe("Sum Test Cases", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });

  test("adding 0.1 + 0.2 should be closed to 0.3", () => {
    expect(mathOperations.sum(0.1, 0.2)).toBeCloseTo(0.3); // 0.3000000002
  });

  test("adding -1 + -2 should return -3", () => {
    expect(mathOperations.sum(-1, -2)).toBe(-3); 
  });

  test("adding 'a' + 'b' should return ab", () => {
    expect(mathOperations.sum("a", "b")).toBe("ab");
  });
});

describe("Difference Test Cases", () => {
  test("adding 2 - 2 should return 0", () => {
    expect(mathOperations.diff(2, 2)).toBe(0);
  });

  test("adding 0.1 - 0.2 should be closed to 0.1", () => {
    expect(mathOperations.diff(0.1, 0.2)).toBeCloseTo(-0.1);
  });

  test("adding -1 - -2 should return 1", () => {
    expect(mathOperations.diff(-1, -2)).toBeCloseTo(1);
  });

  test("adding 'a' + 'b' should return NaN", () => {
    expect(mathOperations.diff("a", "b")).toBeNaN();
  });
});

describe("Multiplication Test Cases", () => {
  test("adding 2 * 2 should return 0", () => {
    expect(mathOperations.product(2, 2)).toBe(4);
  });

  test("adding 0.1 * 0.2 should be closed to 0.02", () => {
    expect(mathOperations.product(0.1, 0.2)).toBeCloseTo(0.02);
  });

  test("adding -1 * -2 should return 1", () => {
    expect(mathOperations.product(-1, -2)).toBeCloseTo(2);
  });

  test("adding 'a' x 'b' should return NaN", () => {
    expect(mathOperations.product("a", "b")).toBeNaN();
  });
});
