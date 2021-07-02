import { fireEvent, render, screen } from "@testing-library/react";
import { Quotes } from "./Quotes";

const quote = "test quote";
const character = "random character";

test("renders received quote, character and a button", () => {
	render(<Quotes quote={quote} character={character} />);

	const quoteEl = screen.getByText(quote);
	const characterEl = screen.getByText(`- ${character}`);
	const buttonEl = screen.getByRole("button");

	expect(quoteEl).toBeInTheDocument();
	expect(characterEl).toBeInTheDocument();
	expect(buttonEl).toBeInTheDocument();
});

test("calls a callback when button is pressed", () => {
	const callback = jest.fn();

	render(<Quotes quote={quote} character={character} onUpdate={callback} />);

	const buttonEl = screen.getByRole("button");

	fireEvent.click(buttonEl);

	expect(callback).toHaveBeenCalledTimes(1);
});
