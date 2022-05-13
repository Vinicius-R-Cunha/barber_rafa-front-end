import { Container, Icons, MenuContainer, NavButton } from "./style";
import { MdOutlineMenu } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ResponsiveHeader() {
    const { openAuthenticationModal } = useContext(UserContext);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const navigate = useNavigate();

    function toggleOpenNavMenu() {
        setMenuIsOpen(!menuIsOpen);
    }

    function navigateToPage(page) {
        setMenuIsOpen(false);
        navigate(page);
    }

    return (
        <Container>
            <img className="logo-image-tablet" src={logo} alt="" />
            <Icons>
                {menuIsOpen ? (
                    <IoClose
                        onClick={() => toggleOpenNavMenu()}
                        className="tablet-icon"
                    />
                ) : (
                    <MdOutlineMenu
                        onClick={() => toggleOpenNavMenu()}
                        className="tablet-icon"
                    />
                )}
                <BsPersonCircle
                    onClick={() => openAuthenticationModal()}
                    className="tablet-icon"
                />
            </Icons>

            {menuIsOpen && (
                <MenuContainer>
                    <NavButton onClick={() => navigateToPage("/")}>
                        Página Inicial
                    </NavButton>
                    <NavButton onClick={() => navigateToPage("/servicos")}>
                        Serviços
                    </NavButton>
                    <NavButton onClick={() => navigateToPage("/sobre")}>
                        Sobre
                    </NavButton>
                    <NavButton onClick={() => navigateToPage("/contato")}>
                        Contato
                    </NavButton>
                </MenuContainer>
            )}
        </Container>
    );
}
