import capitalize from "../capitalize";

test("Capitalizes first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});
