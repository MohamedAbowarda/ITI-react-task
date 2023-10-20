import { render, screen,fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("should render the default counter value 200", () => {
  render(<Counter />);
  const counterValue = screen.getByText('200');
  expect(counterValue).toBeInTheDocument();
});
test("should render Decrement button", () => {
  render(<Counter />);
  const DecrBtn = screen.getByRol("button", { name: "Decrement" });
  expect(DecrBtn).toBeInTheDocument();
  expect(DecrBtn).toBeEnabled();
});
test("when press Decrement the counter is Decreased", () => {
  render(<Counter />);
  const counterValue = screen.getByText("200");
  expect(counterValue).toBeInTheDocument();
  expect(counterValue).toHaveTextContent("200");

  const DecrBtn = screen.getByRol("button", { name: "Decrement" });
  fireEvent.click(DecrBtn);


});

