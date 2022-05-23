import { Container, NavButtons, NavButton } from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Footer() {
    const { openAuthenticationModal, userIsLoggedIn } = useContext(UserContext);

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
                {userIsLoggedIn ? (
                    <NavButton onClick={() => navigate("/reservas")}>
                        Reservas
                    </NavButton>
                ) : (
                    <NavButton onClick={() => openAuthenticationModal()}>
                        Entrar/Inscrever-se
                    </NavButton>
                )}
            </NavButtons>
        </Container>
    );
}
