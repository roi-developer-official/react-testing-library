import { render, screen } from "../../../test_utils/testing_library_utile";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import OrderEntry from '../OrderEntry';

test("update scoop subtotal when scoops chagne", async () => {
  render(<Options optionType="scoops" />);

  const scoopeSubTotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopeSubTotal).toHaveTextContent("0.00");

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


test('update toppings when toopings change', async()=>{
  render(<Options  optionType="toppings"/>);
  const toppingsSubtotal = screen.getByText("Toppings total: $", { exact: false });
  const cherriesCheckbox = await screen.findByRole('checkbox',{
    name: "Cherries"
  });

  expect(cherriesCheckbox.checked).toBe(false);

  const hutFudgeCheckbox = screen.getByRole('checkbox', {
    name: 'Hot fudge'
  });

  userEvent.click(hutFudgeCheckbox);
  expect(toppingsSubtotal).toHaveTextContent("1.50");
  userEvent.click(cherriesCheckbox);
  expect(toppingsSubtotal).toHaveTextContent('3.00');
  userEvent.click(cherriesCheckbox);
  expect(toppingsSubtotal).toHaveTextContent("1.50");
});


describe('grand total', ()=>{
  
  test('grand total added properly if scoop added first',async ()=>{
    render(<OrderEntry/>);

    const grandTotal = screen.getByRole('heading', {
      name: /Grand total: \$/i
    });

    expect(grandTotal).toHaveTextContent('0.00');
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(grandTotal).toHaveTextContent("2.00");

    const cherriesCheckbox = await screen.findByRole('checkbox',{
      name: "Cherries"
    });

    userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent("3.50");

   });

  test('grand total added properly if topping added first',async()=>{
    render(<OrderEntry/>);

    const grandTotal = screen.getByRole('heading', {
      name: /Grand total: \$/i
    });

    const cherriesCheckbox = await screen.findByRole('checkbox',{
      name: "Cherries"
    });

    userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent("1.50");
    
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(grandTotal).toHaveTextContent("3.50");
  });

})