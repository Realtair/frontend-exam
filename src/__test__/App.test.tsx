import { render, screen } from "@testing-library/react";
import App from "../App";

test("Sample test", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
});
