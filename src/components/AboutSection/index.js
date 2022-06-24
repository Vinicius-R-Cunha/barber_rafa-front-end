import {
  Container,
  AboutContainer,
  ProfileImage,
  InfoContainer,
  BarberName,
  AdressPhone,
  Description,
} from "./style";
import SocialIcons from "../SocialIcons";
import rafa from "../../assets/rafa_placeholder.jpg";

export default function AboutSection() {
  return (
    <Container>
      <AboutContainer>
        <ProfileImage src={rafa} alt="" />
        <InfoContainer>
          <BarberName>Rafa Macedo</BarberName>

          <AdressPhone>
            <p>Contato: (11) 98747-9047</p>
            <p>Rua Itinguçu, 1085, 03658-010, São Paulo</p>
          </AdressPhone>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            unde, laboriosam quo quos blanditiis deserunt quisquam consequatur
            sint necessitatibus quasi aliquid esse quod odio ullam, culpa
            commodi ratione incidunt enim voluptas, earum a? Eaque itaque
            voluptas necessitatibus ex omnis placeat?
          </Description>
          <SocialIcons />
        </InfoContainer>
      </AboutContainer>
    </Container>
  );
}
