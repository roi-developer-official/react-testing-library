import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scope from server", async () => {
  render(<Options optionType="scoops" />);

  const scoopeImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopeImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopeImages.map((el) => el.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for eact topping from server", async () => {
  render(<Options optionType="toppings" />);

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);
  const altText = toppingImages.map(el=>el.alt);
  expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping'])
});
