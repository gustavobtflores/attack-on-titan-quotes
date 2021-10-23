import styled from "styled-components";
import erenImg from "../../assets/img/eren.png";
import { Quotes } from "../../components/Quotes";
import { useState, useEffect, useRef } from "react";
import { getQuote } from "../../services";
import sasageyo from "../../sounds/sasageyo.mp3";

const audio = new Audio(sasageyo);

export function App() {
  const [quoteState, setQuoteState] = useState({
    quote: "loading quote...",
    character: "loading character...",
  });
  const [muted, setMuted] = useState(false);
  const isMounted = useRef(true);

  const onUpdate = async () => {
    const randomQuote = await getQuote();

    if (isMounted.current) {
      !muted && audio.play();
      setQuoteState(randomQuote);
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const muteToggle = () => {
    setMuted(!muted);
  };

  return (
    <Content>
      <Quotes
        {...quoteState}
        onUpdate={onUpdate}
        muted={muted}
        muteToggle={muteToggle}
      />
      <Eren src={erenImg} alt="Eren with his sword" />
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

const Eren = styled.img`
  max-height: 100%;
`;
