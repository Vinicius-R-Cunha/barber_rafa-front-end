import {
  Container,
  AboutContainer,
  InfoContainer,
  Title,
  Description,
  Button,
  ProfileImage,
} from "./style";
import haircut from "../../assets/haircut.jpeg";
import { useNavigate } from "react-router-dom";

export default function HomeToAboutSection() {
  const navigate = useNavigate();

  return (
    <Container>
      <AboutContainer>
        <InfoContainer>
          <Title>Prezamos pelo seu bom atendimento.</Title>
          <Description>
            Somos uma barbearia que preza muito pelo conforto cliente! Sinta-se
            livre para conhecer!
          </Description>
          <Button onClick={() => navigate("/sobre")}>Mais sobre nós</Button>
        </InfoContainer>
        <ProfileImage src={haircut} alt="" />
      </AboutContainer>
    </Container>
  );
}
