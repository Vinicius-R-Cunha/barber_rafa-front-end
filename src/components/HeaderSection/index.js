import {
    Container,
    HeaderDiv,
    NavButtons,
    NavButton,
    About,
    BookButton,
} from "./style";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import background from "../../assets/background.jpeg";
import { BsPersonCircle } from "react-icons/bs";
import ResponsiveHeader from "../ResponsiveHeader";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function HeaderSection({ page, title }) {
    const { openAuthenticationModal } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Container page={page}>
            <img className="background-image" src={background} alt="" />
            <div className="background-darkness"></div>

            <ResponsiveHeader />

            <HeaderDiv>
                <img className="logo-image" src={logo} alt="" />
                <NavButtons>
                    <NavButton onClick={() => navigate("/")}>
                        Página Inicial
                    </NavButton>
                    <NavButton onClick={() => navigate("/servicos")}>
                        Serviços
                    </NavButton>
                    <NavButton onClick={() => navigate("/sobre")}>
                        Sobre
                    </NavButton>
                    <NavButton onClick={() => navigate("/contato")}>
                        Contato
                    </NavButton>
                    <NavButton onClick={() => openAuthenticationModal()}>
                        <BsPersonCircle className="login-icon" />
                        <p>Entrar/Inscrever-se</p>
                    </NavButton>
                </NavButtons>
            </HeaderDiv>

            {page === "home" && (
                <>
                    <About page={page}>
                        Barbearia com ambiente
                        <br />
                        <span>para toda a família</span>
                    </About>

                    <BookButton onClick={() => navigate("/servicos")}>
                        Agende seu corte
                    </BookButton>
                </>
            )}

            {page !== "home" && <About>{title}</About>}
        </Container>
    );
}
