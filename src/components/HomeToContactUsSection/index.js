import {
  Container,
  BackgroundImage,
  BackgroundDarkness,
  Title,
  Button,
} from "./style";
import { useNavigate } from "react-router-dom";
import background from "../../assets/find_us_background.jpg";

export default function HomeToContactUsSection() {
  const navigate = useNavigate();

  return (
    <Container>
      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <Title>Onde nos encontrar?</Title>
      <Button onClick={() => navigate("/contato")}>Página de contato</Button>
    </Container>
  );
}
