import { findByTestId, fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";
import App from "../../../../src/App";
describe("testing trot field ", () => {
  test("testing trot rendered but not visible if non-equilibrium-switch* is not checked", () => {
    render(<App />);
    const input = screen.queryByTestId("trot-input") as HTMLElement;
    expect(input).not.toBeInTheDocument();
  });
  test("testing trot rendered and visible if non-equilibrium-switch* is checked", () => {
    render(<App />);
    const button = screen.getByTestId("non-equilibrium-switch-testid").querySelector("input");
    button?.checked == false ? user.click(button) : null;
    const input = screen.getByTestId("trot-input").querySelector("input");
    expect(input).toBeVisible();
    expect(input).toBeInTheDocument();
  });
  test("testing trot rendering with defaultValue if non-equilibrium-switch* is checked", () => {
    render(<App />);
    const button = screen.getByTestId("non-equilibrium-switch-testid").querySelector("input");
    button?.checked == false ? user.click(button) : null;
    const input = screen.getByTestId("trot-input").querySelector("input");
    expect(input).toHaveValue(300);
  });
  test("testing trot rendered with user* given value if non-equilibrium-switch* is checked", async () => {
    render(<App />);
    const button = screen.getByTestId("non-equilibrium-switch-testid").querySelector("input");
    button?.checked == false ? user.click(button) : null;
    const input = screen.getByTestId("trot-input").querySelector("input");
    fireEvent.input(input, {
      target: { value: 100 },
    });
    expect(input).toHaveValue(100);
  });
});
