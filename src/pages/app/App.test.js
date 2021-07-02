import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders the app with a button, a quote and a img", () => {
	render(<App />);

	const buttonEl = screen.getByRole("button");
	const imageEl = screen.getByRole("img");

	expect(buttonEl).toBeInTheDocument();
	expect(imageEl).toBeInTheDocument();
});
