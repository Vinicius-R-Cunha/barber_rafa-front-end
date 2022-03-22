import { Container, HeaderDiv, BookButton, AboutDiv, MobileMenu } from "./style"
import logo from '../../assets/logo.jpg'
import { Link } from 'react-scroll'
import { useState } from "react"

export default function HeaderSection() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Container>

            {openMenu &&
                <MobileMenu>
                    {/* <Link activeClass="active" className="nav-button" to="security" spy={true} smooth={true} offset={-120} duration={500}>Segurança</Link>
                    <Link activeClass="active" className="nav-button" to="schedule" spy={true} smooth={true} offset={-120} duration={500}>Horários</Link>
                    <Link activeClass="active" className="nav-button" to="services" spy={true} smooth={true} duration={500}>Serviços</Link>
                    <Link activeClass="active" className="nav-button" to="security" spy={true} smooth={true} offset={-120} duration={500}>Galeria</Link>
                    <Link activeClass="active" className="nav-button" to="contact-us" spy={true} smooth={true} duration={500}>Contato</Link>
                    <Link activeClass="active" className="nav-button" to="security" spy={true} smooth={true} offset={-120} duration={500}>Localização</Link> */}
                </MobileMenu>
            }

            <ion-icon onClick={() => setOpenMenu(true)} name="menu-outline"></ion-icon>
            <div className="query-1250px">
                <img className="logo-image-1250px" src={logo} alt="" />
                <div className="nav-buttons">
                    <Link activeClass="active" className="nav-button" to="security" spy={true} smooth={true} offset={-120} duration={500}>Segurança</Link>
                    <Link activeClass="active" className="nav-button" to="schedule" spy={true} smooth={true} offset={-120} duration={500}>Horários</Link>
                    <Link activeClass="active" className="nav-button" to="services" spy={true} smooth={true} duration={500}>Serviços</Link>
                    <Link activeClass="active" className="nav-button" to="security" spy={true} smooth={true} offset={-120} duration={500}>Galeria</Link>
                    <Link activeClass="active" className="nav-button" to="contact-us" spy={true} smooth={true} duration={500}>Contato</Link>
                    <Link activeClass="active" className="nav-button" to="security" spy={true} smooth={true} offset={-120} duration={500}>Localização</Link>
                </div>
            </div>

            <HeaderDiv>
                <div className="left-right-side">
                    <Link activeClass="active" className="nav-button" to="security" spy={true} smooth={true} offset={-120} duration={500}>Segurança</Link>
                    <Link activeClass="active" className="nav-button" to="schedule" spy={true} smooth={true} offset={-120} duration={500}>Horários</Link>
                    <Link activeClass="active" className="nav-button" to="services" spy={true} smooth={true} duration={500}>Serviços</Link>
                </div>
                <img className="logo-image" src={logo} alt="" />
                <div className="left-right-side">
                    <Link activeClass="active" className="nav-button" to="security" spy={true} smooth={true} offset={-120} duration={500}>Galeria</Link>
                    <Link activeClass="active" className="nav-button" to="contact-us" spy={true} smooth={true} duration={500}>Contato</Link>
                    <Link activeClass="active" className="nav-button" to="security" spy={true} smooth={true} offset={-120} duration={500}>Localização</Link>
                </div>
            </HeaderDiv>

            <BookButton><Link activeClass="active" className="nav-button" to="services" spy={true} smooth={true} duration={500}>Agendar</Link></BookButton>

            <AboutDiv>
                <p className="about">Barbearia com ambiente <br /> para toda a familia</p>
                <p className="phone-number">(11) 98747-9047</p>
                <p className="adress">Rua Itinguçu, 1085, 03658-010, São Paulo</p>
            </AboutDiv>
        </Container>
    )
}