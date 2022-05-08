import { Link } from "react-scroll";

export default function RightSideMenu({ setOpenMenu }) {
    return (
        <>
            <Link
                onClick={setOpenMenu ? () => setOpenMenu(false) : ""}
                activeClass="active"
                className="nav-button"
                to="security"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
            >
                Galeria
            </Link>
            <Link
                onClick={setOpenMenu ? () => setOpenMenu(false) : ""}
                activeClass="active"
                className="nav-button"
                to="contact-us"
                spy={true}
                smooth={true}
                duration={500}
            >
                Contato
            </Link>
            <Link
                onClick={setOpenMenu ? () => setOpenMenu(false) : ""}
                activeClass="active"
                className="nav-button"
                to="security"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
            >
                Localização
            </Link>
        </>
    );
}
