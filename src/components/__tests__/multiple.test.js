import { multiple } from "../multiple";

test("function multiple should calculate multiple of two numbers  ", () => {
  const result = multiple(4, 5);

  //Assertion
  expect(result).toBe(20);
});
