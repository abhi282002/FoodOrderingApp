import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Help from "../components/Help";
test("should be loaded on to dom or not", () => {
  render(<Help />);
  const heading = screen.getAllByRole("heading");
  expect(heading.length).toBe(3);
});

it("should input tag loaded or not ", () => {
  render(<Help />);
  const input = screen.getAllByRole("textbox");
  expect(input.length).toBe(2);
});
