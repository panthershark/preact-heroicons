import { test, expect } from "vitest";
import { render, screen } from "@testing-library/preact";
import { ChevronRightSolid, CheckOutline } from "../.";

test("render icon", () => {
  render(<ChevronRightSolid />);
});

test("render icon with class", () => {
  render(<CheckOutline data-testid="blarg" class="floop" />);
  expect(screen.getByTestId("blarg").classList).toContain("floop");
});
