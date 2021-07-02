import styled from "styled-components";
import erenImg from "../../assets/img/eren.png";
import { Quotes } from "../../components/Quotes";

export function App() {
	return (
		<Content>
			<Quotes quote={"teste"} speaker={"speaker"} />
			<img src={erenImg} alt="Eren with his sword" />
		</Content>
	);
}

const Content = styled.div`
	height: 100vh;
	padding: 0 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
