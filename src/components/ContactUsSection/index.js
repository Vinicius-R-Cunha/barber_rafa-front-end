import {
    InfosContainer,
    Info,
    Container,
    MapContainer,
    FormContainer,
    Button,
} from "./style";
import contact from "../../assets/contact.png";
import location from "../../assets/location.png";
import schedule from "../../assets/schedule.png";
import { BsWhatsapp } from "react-icons/bs";
import PigeonMap from "../PigeonMap";

export default function ContactUsSection() {
    const PHONE_NUMBER = "98747-9047";

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
                    <p className="description">{`Tel: (11) ${PHONE_NUMBER}`}</p>
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

            <MapContainer>
                <PigeonMap />
            </MapContainer>

            <FormContainer>
                <p className="form-title">
                    Alguma <span>dúvida?</span>
                </p>
                <div className="separator"></div>
                <p className="form-description">Mande uma mensagem:</p>
                <Button
                    onClick={() =>
                        window.open(
                            `https://api.whatsapp.com/send?phone=5511${PHONE_NUMBER.replace(
                                "-",
                                ""
                            )}`,
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
