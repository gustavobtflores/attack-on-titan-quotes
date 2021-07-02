import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders the app with a button, a quote and a img", () => {
	render(<App />);

	const buttonEl = screen.getByRole("button");
	const imageEl = screen.getByRole("img");
	const textEl = screen.getByRole("p");

	expect(buttonEl).toBeInTheDocument();
	expect(imageEl).toBeInTheDocument();
	expect(textEl).toBeInTheDocument();
});
