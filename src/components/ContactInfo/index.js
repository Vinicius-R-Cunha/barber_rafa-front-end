import {
  Container,
  InfosContainer,
  Info,
  Image,
  Title,
  Description,
} from "./style";
import contact from "../../assets/contact.png";
import location from "../../assets/location.png";
import schedule from "../../assets/schedule.png";

export default function ContactInfo() {
  const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER;

  return (
    <Container>
      <InfosContainer>
        <Info>
          <Image src={location} alt="" />
          <Title>Localização</Title>
          <Description>
            Rua Itinguçu, 1085,
            <br />
            03658-010, São Paulo
          </Description>
        </Info>
        <Info>
          <Image src={contact} alt="" />
          <Title>Contato</Title>
          <Description>{`Tel: (11) ${PHONE_NUMBER}`}</Description>
        </Info>
        <Info>
          <Image src={schedule} alt="" />
          <Title>Horário Normal</Title>
          <Description>
            Ter - Sex: 9:00 - 20:00
            <br />
            Sáb: 8:00 - 19:30
          </Description>
        </Info>
      </InfosContainer>
    </Container>
  );
}
