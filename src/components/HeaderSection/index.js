import {
    Container,
    HeaderDiv,
    BookButton,
    AboutDiv,
    MobileMenu,
} from "./style";
import logo from "../../assets/logo.jpg";
import { Link } from "react-scroll";
import { useState } from "react";
import LeftSideMenu from "../LeftSideMenu";
import RightSideMenu from "../RightSideMenu";

export default function HeaderSection() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Container>
            {openMenu && (
                <MobileMenu>
                    <LeftSideMenu setOpenMenu={setOpenMenu} />
                    <RightSideMenu setOpenMenu={setOpenMenu} />
                </MobileMenu>
            )}

            <ion-icon
                onClick={() => setOpenMenu(!openMenu)}
                name="menu-outline"
            ></ion-icon>
            <div className="query-1250px">
                <img className="logo-image-1250px" src={logo} alt="" />
                <div className="nav-buttons">
                    <LeftSideMenu />
                    <RightSideMenu />
                </div>
            </div>

            <HeaderDiv>
                <div className="left-right-side">
                    <LeftSideMenu />
                </div>
                <img className="logo-image" src={logo} alt="" />
                <div className="left-right-side">
                    <RightSideMenu />
                </div>
            </HeaderDiv>

            <BookButton>
                <Link
                    activeClass="active"
                    className="nav-button"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Agendar
                </Link>
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
