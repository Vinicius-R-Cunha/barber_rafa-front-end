import { Container, NavButtons, NavButton } from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <Container>
            <img src={logo} alt="" />
            <NavButtons>
                <NavButton onClick={() => navigate("/")}>
                    Página Inicial
                </NavButton>
                <NavButton onClick={() => navigate("/servicos")}>
                    Serviços
                </NavButton>
                <NavButton onClick={() => navigate("/contato")}>
                    Contato
                </NavButton>
                <NavButton onClick={() => navigate("/contato")}>
                    Entrar/Increver-se
                </NavButton>
            </NavButtons>
        </Container>
    );
}
