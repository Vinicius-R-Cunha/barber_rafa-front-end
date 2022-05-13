import { Container, InfoContainer, AdressPhone, Description } from "./style";
import SocialIcons from "../SocialIcons";
import rafa from "../../assets/rafa_placeholder.jpg";

export default function AboutSection() {
    return (
        <Container>
            <img className="profile-image" src={rafa} alt="" />
            <InfoContainer>
                <p className="barber-name">Rafa Macedo</p>
                <AdressPhone>
                    <p>Contato: (11) 98747-9047</p>
                    <p>Rua Itinguçu, 1085, 03658-010, São Paulo</p>
                </AdressPhone>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos unde, laboriosam quo quos blanditiis deserunt
                    quisquam consequatur sint necessitatibus quasi aliquid esse
                    quod odio ullam, culpa commodi ratione incidunt enim
                    voluptas, earum a? Eaque itaque voluptas necessitatibus ex
                    omnis placeat?
                </Description>
                <SocialIcons />
            </InfoContainer>
        </Container>
    );
}
