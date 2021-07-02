import styled from "styled-components";
import { Button } from "../../components/Button";

export const Quotes = ({ quote, character, onUpdate }) => {
	return (
		<Wrapper>
			<Quote>{quote}</Quote>
			<Speaker>- {character}</Speaker>
			<Button onClick={onUpdate}>New Quote</Button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1000px;
`;

const Quote = styled.p`
	font-size: 2em;
	margin: 0;
	color: #caa696;
	opacity: 1;
	align-self: start;
`;

const Speaker = styled(Quote)`
	align-self: start;
	text-align: right;
	margin-top: 2em;
	margin-bottom: 50px;
`;
