import {
  Container,
  AboutContainer,
  InfoContainer,
  Description,
  Button,
} from "./style";
import haircut from "../../assets/haircut.jpeg";
import { useNavigate } from "react-router-dom";

export default function HomeToAboutSection() {
  const navigate = useNavigate();

  return (
    <Container>
      <AboutContainer>
        <InfoContainer>
          <p className="title">Prezamos pelo seu bom atendimento.</p>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            cumque eum reprehenderit. Illum eos magnam, provident magni dolorum
            perferendis molestias voluptas et eum obcaecati inventore!
          </Description>
          <Button onClick={() => navigate("/sobre")}>Mais sobre nós</Button>
        </InfoContainer>
        <img className="profile-image" src={haircut} alt="" />
      </AboutContainer>
    </Container>
  );
}
