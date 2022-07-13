import validate from "./bracket-validator";

test("validator handles correct brackets", () => {
  expect(validate("{ [ ] ( ) }")).toBe(true);
  expect(validate("{ () [] }")).toBe(true);
});

test("validator returns false for uneven number of brackets of the same type", () => {
  expect(validate("[())")).toBe(false);
});

test("validator returns false for enclosed opener brackets", () => {
  expect(validate("{ [ ( ] ) }")).toBe(false);
});

test("validator returns false for premature closer brackets", () => {
  expect(validate("[ ())([])]")).toBe(false);
});
