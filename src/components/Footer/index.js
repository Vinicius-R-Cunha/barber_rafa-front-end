import { Container, NavButtons, NavButton } from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Footer() {
    const { openAuthenticationModal } = useContext(UserContext);
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
                <NavButton onClick={() => navigate("/sobre")}>Sobre</NavButton>
                <NavButton onClick={() => navigate("/contato")}>
                    Contato
                </NavButton>
                <NavButton onClick={() => openAuthenticationModal()}>
                    Entrar/Increver-se
                </NavButton>
            </NavButtons>
        </Container>
    );
}
