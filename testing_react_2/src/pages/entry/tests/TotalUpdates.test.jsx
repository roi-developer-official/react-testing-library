import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {OrderDetailsProvider} from '../../../contexts/OrderDetails'
import Options from "../Options";

test("update scoop subtotal when scoops chagne", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  const scoopeSubTotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopeSubTotal).toHaveText("0.00");

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopeSubTotal).toHaveTextContent("2.00");

  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopeSubTotal).toHaveTextContent("6.00");
});
