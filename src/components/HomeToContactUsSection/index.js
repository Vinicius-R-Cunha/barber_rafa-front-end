import { Container, Button } from "./style";
import { useNavigate } from "react-router-dom";
import background from "../../assets/background2.avif";

export default function HomeToContactUsSection() {
  const navigate = useNavigate();

  return (
    <Container>
      <img className="background-image" src={background} alt="" />
      <div className="background-darkness"></div>

      <p className="title">Onde nos encontrar?</p>
      <Button onClick={() => navigate("/contato")}>Página de contato</Button>
    </Container>
  );
}
