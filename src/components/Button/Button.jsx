import styled from "styled-components";

export const Button = styled.button`
	background: #875641;
	border: 0;
	color: white;
	border-radius: 4px;
	padding: 10px 20px;
	cursor: pointer;
	font-family: "Cloister Black", sans-serif;
	transition: 0.2s;
	box-shadow: #875641 1px 1px 5px;
	font-size: 1.5em;

	&:hover {
		filter: brightness(0.9);
	}
`;
