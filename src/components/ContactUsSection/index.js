import {
    InfosContainer,
    Info,
    Container,
    FormContainer,
    Button,
} from "./style";
import contact from "../../assets/contact.png";
import location from "../../assets/location.png";
import schedule from "../../assets/schedule.png";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactUsSection() {
    // lat: -23.525438021785874, lng: -46.50453847304112

    return (
        <Container>
            <InfosContainer>
                <Info>
                    <img src={location} alt="" />
                    <p className="title">Localização</p>
                    <p className="description">
                        Rua Itinguçu, 1085,
                        <br />
                        03658-010, São Paulo
                    </p>
                </Info>
                <Info>
                    <img src={contact} alt="" />
                    <p className="title">Contato</p>
                    <p className="description">Tel: (11) 98747-9047</p>
                </Info>
                <Info>
                    <img src={schedule} alt="" />
                    <p className="title">Horário Normal</p>
                    <p className="description">
                        Ter - Sex: 9:00 - 20:00
                        <br />
                        Sáb: 8:00 - 19:30
                    </p>
                </Info>
            </InfosContainer>
            <FormContainer>
                <p className="form-title">
                    Alguma <span>dúvida?</span>
                </p>
                <div className="separator"></div>
                <p className="form-description">Mande uma mensagem:</p>
                <Button
                    onClick={() =>
                        window.open(
                            `https://api.whatsapp.com/send?phone=5511993457220`,
                            "_blank"
                        )
                    }
                >
                    Enviar mensagem
                    <BsWhatsapp className="whats-icon" />
                </Button>
            </FormContainer>
        </Container>
    );
}
