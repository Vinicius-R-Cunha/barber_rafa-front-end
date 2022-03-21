import { ContactUsDiv, ContactContainer } from "./style"
import whats from "../../assets/whats.png"

export default function ContactUsSection() {

    // lat: -23.525438021785874, lng: -46.50453847304112

    return (
        <ContactContainer name='contact-us'>
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
        </ContactContainer>
    );
}