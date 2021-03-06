import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial colot and chage color when clicked", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorBtn).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorBtn);

  expect(colorBtn).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorBtn).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorBtn).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("button is disabled when checkbox is checked an enable when checkbox unchecked", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(colorBtn).toBeDisabled();
  fireEvent.click(checkBox);
  expect(colorBtn).toBeEnabled();
});

test("disabled button has gray background an revert to red", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle("background-color: gray");
  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle("background-color: MediumVioletRed");
});

test("disabled button has gray background and revert to blue", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(colorBtn);
  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle("background-color: gray");
  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle("background-color: MidnightBlue");
});

// unit tests
describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumViolateRed")).toBe(
      "Medium Violate Red"
    );
  });
});
