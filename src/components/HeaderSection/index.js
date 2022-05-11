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
import logo from "../../assets/logo.jpg";
import background from "../../assets/background.jpeg";
import { BsPersonCircle } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import HeaderTablet from "../HeaderTablet";

export default function HeaderSection() {
    const navigate = useNavigate();

    return (
        <Container>
            <img className="background-image" src={background} alt="" />
            <div className="background-darkness"></div>

            <HeaderTablet />

            <HeaderDiv>
                <img className="logo-image" src={logo} alt="" />
                <NavButtons>
                    <NavButton onClick={() => navigate("/")}>
                        Página Inicial
                    </NavButton>
                    <NavButton>Horários</NavButton>
                    <NavButton onClick={() => navigate("/services")}>
                        Serviços
                    </NavButton>
                    <NavButton>Contato</NavButton>
                    <NavButton>
                        <BsPersonCircle className="login-button" />
                        <NavButton>Entrar/Inscrever-se</NavButton>
                    </NavButton>
                </NavButtons>
            </HeaderDiv>

            <About>
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

            <BookButton>Agende seu corte</BookButton>
        </Container>
    );
}
