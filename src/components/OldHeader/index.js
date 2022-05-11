import {
    Container,
    HeaderDiv,
    BookButton,
    AboutDiv,
    MobileMenu,
} from "./style";
import logo from "../../assets/redlogo.jpg";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

export default function HeaderSection() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Container>
            {openMenu && (
                <MobileMenu>
                    <p
                        className="nav-button"
                        onClick={() => setOpenMenu(false)}
                    >
                        Segurança
                    </p>
                    <p
                        className="nav-button"
                        onClick={() => setOpenMenu(false)}
                    >
                        Horários
                    </p>
                    <p
                        className="nav-button"
                        onClick={() => setOpenMenu(false)}
                    >
                        Serviços
                    </p>
                    <p
                        className="nav-button"
                        onClick={() => setOpenMenu(false)}
                    >
                        Galeria
                    </p>
                    <p
                        className="nav-button"
                        onClick={() => setOpenMenu(false)}
                    >
                        Contato
                    </p>
                    <p
                        className="nav-button"
                        onClick={() => setOpenMenu(false)}
                    >
                        Localização
                    </p>
                </MobileMenu>
            )}

            <MdOutlineMenu
                onClick={() => setOpenMenu(!openMenu)}
                name="menu-outline"
                className="menu-icon"
            />
            <div className="query-1250px">
                <img className="logo-image-1250px" src={logo} alt="" />
                <div className="nav-buttons">
                    <p className="nav-button">Segurança</p>
                    <p className="nav-button">Horários</p>
                    <p className="nav-button">Serviços</p>
                    <p className="nav-button">Galeria</p>
                    <p className="nav-button">Contato</p>
                    <p className="nav-button">Localização</p>
                </div>
            </div>

            <HeaderDiv>
                <div className="left-right-side">
                    <p className="nav-button">Segurança</p>
                    <p className="nav-button">Horários</p>
                    <p className="nav-button">Serviços</p>
                </div>
                <img className="logo-image" src={logo} alt="" />
                <div className="left-right-side">
                    <p className="nav-button">Galeria</p>
                    <p className="nav-button">Contato</p>
                    <p className="nav-button">Localização</p>
                </div>
            </HeaderDiv>

            <BookButton>
                <p>Agendar</p>
            </BookButton>

            <AboutDiv>
                <p className="about">
                    Barbearia com ambiente <br /> para toda a familia
                </p>
                <p className="phone-number">(11) 98747-9047</p>
                <p className="adress">
                    Rua Itinguçu, 1085, 03658-010, São Paulo
                </p>
            </AboutDiv>
        </Container>
    );
}
