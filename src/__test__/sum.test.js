import { sum } from "../components/sum";

test("should get result right or not", () => {
  const result = sum(3, 2);
  expect(result).toBe(5);
});
