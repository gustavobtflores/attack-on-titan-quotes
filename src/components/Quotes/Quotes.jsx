import { useState } from "react";

export const Quotes = ({ quote, speaker }) => {
	const [quotes, setQuotes] = useState([]);

	return (
		<div>
			<p>{quote}</p>
			<p>- {speaker}</p>
			<button></button>
		</div>
	);
};

// const QuotesStyle = styled.div;
