import { Link } from "react-scroll";

export default function LeftSideMenu({ setOpenMenu }) {
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
                Segurança
            </Link>
            <Link
                onClick={setOpenMenu ? () => setOpenMenu(false) : ""}
                activeClass="active"
                className="nav-button"
                to="schedule"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
            >
                Horários
            </Link>
            <Link
                onClick={setOpenMenu ? () => setOpenMenu(false) : ""}
                activeClass="active"
                className="nav-button"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
            >
                Serviços
            </Link>
        </>
    );
}
