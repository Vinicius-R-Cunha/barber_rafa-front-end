import { Container, HeaderDiv, BookButton } from "./style"
import logo from '../../assets/logo.jpg'

export default function HeaderSection() {
    return (
        <Container>
            <HeaderDiv>
                <p className="nav-button">Serviços</p>
                <div className="logo" onClick={() => window.location.reload()}>
                    <img src={logo} alt="" />
                    <h1>Barber Rafa Macedo</h1>
                </div>
                <p className="nav-button">Contato</p>
            </HeaderDiv>
            <BookButton>Agendar</BookButton>
        </Container>
    )
}