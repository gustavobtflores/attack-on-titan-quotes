import styled from "styled-components";
import muteIcon from "../../assets/svg/volume-mute.svg";
import unmutedIcon from "../../assets/svg/volume-up.svg";
import { Button } from "../../components/Button";

export const Quotes = ({ quote, character, onUpdate, muted, muteToggle }) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>- {character}</Speaker>
      <ControlsContainer>
        <Button onClick={onUpdate}>New Quote</Button>
        <Button onClick={muteToggle}>
          {muted ? (
            <MuteIcon src={muteIcon} alt="Button for mute audio" />
          ) : (
            <MuteIcon src={unmutedIcon} alt="Button for mute audio" />
          )}
        </Button>
      </ControlsContainer>
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

const ControlsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const MuteIcon = styled.img`
  display: block;
`;
