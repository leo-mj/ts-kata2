import sumRecursively from "./sum-recursion";

test("sumRecursively sums positive integer arrays", () => {
  expect(sumRecursively([1, 2, 3, 4, 5])).toBe(15);
  expect(sumRecursively([20])).toBe(20);
  expect(
    sumRecursively([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  ).toBe(18);
});

test("sumRecursively sums arrays including zero and negative integers", () => {
  expect(sumRecursively([-1, -2, -3, -4, -5])).toBe(-15);
  expect(sumRecursively([20, 0])).toBe(20);
  expect(sumRecursively([0, 0, 0, 0, -1, 1])).toBe(0);
});

test("sumRecursively can handle empty arrays", () => {
  expect(sumRecursively([])).toBe(undefined);
});
