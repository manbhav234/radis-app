import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import App from "../../../../src/App";
describe("testing tvib field ", () => {
  test("testing tvib rendered but not visible if non-equilibrium-switch* is not checked", () => {
    render(<App />);
    const input = screen.queryByTestId("tvib-input") as HTMLElement;
    expect(input).not.toBeInTheDocument();
  });
  test("testing tvib rendered and visible if non-equilibrium-switch* is checked", () => {
    render(<App />);
    const button = screen.getByTestId("non-equilibrium-switch-testid").querySelector("input");
    button?.checked == false ? user.click(button) : null;
    const input = screen.getByTestId("tvib-input")?.querySelector("input");
    expect(input).toBeVisible();
    expect(input).toBeInTheDocument();
  });
  test("testing tvib rendering with defaultValue if non-equilibrium-switch* is checked", () => {
    render(<App />);
    const button = screen.getByTestId("non-equilibrium-switch-testid").querySelector("input");
    button?.checked == false ? user.click(button) : null;
    const input = screen.queryByTestId("tvib-input")?.querySelector("input");
    expect(input).toHaveValue(300);
  });
  test("testing tvib rendered with user* given value if non-equilibrium-switch* is checked", () => {
    render(<App />);
    const button = screen.getByTestId("non-equilibrium-switch-testid").querySelector("input");
    button?.checked == false ? user.click(button) : null;
    const input = screen.queryByTestId("tvib-input")?.querySelector("input");
    fireEvent.input(input, {
      target: { value: 100 },
    });
    expect(input).toHaveValue(100);
  });
});
