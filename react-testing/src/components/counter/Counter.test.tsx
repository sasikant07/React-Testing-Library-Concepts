import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await userEvent.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 10 after clicking on set button", async () => {
    userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await userEvent.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await userEvent.tab();
    expect(incrementButton).toHaveFocus();

    await userEvent.tab();
    expect(amountInput).toHaveFocus();

    await userEvent.tab();
    expect(incrementButton).toHaveFocus();
  });
});
