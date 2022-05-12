import {
    Container,
    HeaderDiv,
    NavButtons,
    NavButton,
    About,
    SocialIcons,
    BookButton,
} from "./style";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import background from "../../assets/background.jpeg";
import { BsPersonCircle } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import ResponsiveHeader from "../ResponsiveHeader";

export default function HeaderSection({ page, title }) {
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
                    {/* <NavButton onClick={() => navigate("/horarios")}>
                        Horários
                    </NavButton> */}
                    <NavButton onClick={() => navigate("/servicos")}>
                        Serviços
                    </NavButton>
                    <NavButton onClick={() => navigate("/contato")}>
                        Contato
                    </NavButton>
                    <NavButton>
                        <BsPersonCircle className="login-icon" />
                        <NavButton>Entrar/Inscrever-se</NavButton>
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
                    <SocialIcons>
                        <AiOutlineInstagram
                            className="icon"
                            onClick={() =>
                                window.open(
                                    "https://www.instagram.com/barberafamacedo/",
                                    "_blank"
                                )
                            }
                        />
                        <RiFacebookFill
                            className="icon"
                            onClick={() =>
                                window.open(
                                    "https://m.facebook.com/BarberRafaMacedo/?ref=bookmarks",
                                    "_blank"
                                )
                            }
                        />
                    </SocialIcons>

                    <BookButton onClick={() => navigate("/servicos")}>
                        Agende seu corte
                    </BookButton>
                </>
            )}

            {page === "services" && <About>{title}</About>}
            {page === "schedule" && <About>Horários</About>}
            {page === "contact-us" && <About>Contato</About>}
        </Container>
    );
}
