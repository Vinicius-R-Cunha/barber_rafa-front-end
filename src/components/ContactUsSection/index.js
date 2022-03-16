import { ContactUsDiv, MapDiv, ContactContainer } from "./style"
import whats from "../../assets/whats.png"

export default function ContactUsSection() {
    return (
        <ContactContainer>
            <ContactUsDiv>
                <div className="contact-container">
                    <p className="contact-title">Contato:</p>
                    <p className="contact-about">Alguma dúvida sobre algum serviço? Precisa de alguma coisa em específico?</p>
                    <p className="contact-about">Mande uma mensagem no WhatsApp disponível abaixo.</p>
                    <div className="button-phone-div">
                        <p className="phone">(11) 98747-9047</p>
                        <button className="whatsapp-button">
                            WhatsApp
                            <img src={whats} alt="" />
                        </button>
                    </div>
                </div>
            </ContactUsDiv>
            <MapDiv>
                <p>alo</p>
            </MapDiv>
        </ContactContainer>
    );
}