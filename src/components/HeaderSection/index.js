import { Container, HeaderDiv, BookButton, AboutDiv } from "./style"
import logo from '../../assets/logo.jpg'

export default function HeaderSection() {
    return (
        <Container>
            <HeaderDiv>
                <p className="nav-button">Segurança</p>
                <p className="nav-button">Horários</p>
                <div className="logo" onClick={() => window.location.reload()}>
                    <img src={logo} alt="" />
                    <h1>Barber Rafa Macedo</h1>
                </div>
                <p className="nav-button">Serviços</p>
                <p className="nav-button">Contato</p>
            </HeaderDiv>
            <BookButton>Agendar</BookButton>
            <AboutDiv>
                <p className="about">Barbearia com ambiente <br /> para toda a familia</p>
                <p className="adress">Rua Itinguçu, 1085, 03658-010, São Paulo</p>
                <p className="phone-number">(11) 98747-9047</p>
            </AboutDiv>
        </Container>
    )
}