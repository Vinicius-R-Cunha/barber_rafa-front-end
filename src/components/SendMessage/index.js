import {
  Container,
  InsideContainer,
  Title,
  Subtitle,
  Spacer,
  Button,
} from "./style";

import { BsWhatsapp } from "react-icons/bs";

export default function SendMessage() {
  const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER.replace("-", "");
  const whastAppLink = `https://api.whatsapp.com/send?phone=5511${PHONE_NUMBER}`;

  return (
    <Container>
      <InsideContainer>
        <Title>
          Alguma <span>dúvida?</span>
        </Title>
        <Spacer />
        <Subtitle>Mande uma mensagem:</Subtitle>

        <Button onClick={() => window.open(whastAppLink, "_blank")}>
          Enviar mensagem
          <BsWhatsapp className="whats-icon" />
        </Button>
      </InsideContainer>
    </Container>
  );
}
