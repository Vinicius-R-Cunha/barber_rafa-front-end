import {
    Container,
    HeaderDiv,
    NavButtons,
    NavButton,
    About,
    BookButton,
    MenuContainer,
    ProfileButton,
} from "./style";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import background from "../../assets/background3.avif";
import { BsPersonCircle } from "react-icons/bs";
import ResponsiveHeader from "../ResponsiveHeader";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function HeaderSection({ page, title }) {
    const { setToken, openAuthenticationModal, userIsLoggedIn } =
        useContext(UserContext);

    const [profileTabIsOpen, setProfileTabIsOpen] = useState(false);

    const navigate = useNavigate();

    function navigateToPage(page) {
        setProfileTabIsOpen(false);
        navigate(page);
    }

    function logout() {
        setProfileTabIsOpen(false);
        localStorage.removeItem("token");
        setToken(null);
    }

    return (
        <Container page={page}>
            <img className="background-image" src={background} alt="" />
            <div className="background-darkness"></div>

            <ResponsiveHeader
                profileTabIsOpen={profileTabIsOpen}
                setProfileTabIsOpen={setProfileTabIsOpen}
                logout={logout}
            />

            <HeaderDiv>
                {profileTabIsOpen && (
                    <MenuContainer>
                        <ProfileButton
                            onClick={() => navigateToPage("/reservas")}
                        >
                            Reservas
                        </ProfileButton>
                        <ProfileButton onClick={() => logout()}>
                            Sair
                        </ProfileButton>
                    </MenuContainer>
                )}
                <img
                    onClick={() => navigate("/")}
                    className="logo-image"
                    src={logo}
                    alt=""
                />
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
                    {userIsLoggedIn ? (
                        <NavButton
                            onClick={() =>
                                setProfileTabIsOpen(!profileTabIsOpen)
                            }
                        >
                            <BsPersonCircle className="login-icon" />
                            <p>Perfil</p>
                        </NavButton>
                    ) : (
                        <NavButton onClick={() => openAuthenticationModal()}>
                            <BsPersonCircle className="login-icon" />
                            <p>Entrar/Inscrever-se</p>
                        </NavButton>
                    )}
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
