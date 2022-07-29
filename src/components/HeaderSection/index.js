import {
  Container,
  BackgroundImage,
  BackgroundDarkness,
  HeaderDiv,
  NavButtons,
  NavButton,
  About,
  BookButton,
  MenuContainer,
  ProfileButton,
  LogoImage,
} from "./style";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import background from "../../assets/colored_lion.png";
import { BsPersonCircle } from "react-icons/bs";
import ResponsiveHeader from "../ResponsiveHeader";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function HeaderSection({ page, title }) {
  const {
    setToken,
    openAuthenticationModal,
    loadingUserValidation,
    userIsLoggedIn,
    userIsAdmin,
  } = useContext(UserContext);

  const [profileTabIsOpen, setProfileTabIsOpen] = useState(false);

  const navigate = useNavigate();

  function navigateToPage(page) {
    setProfileTabIsOpen(false);
    navigate(page);
  }

  function logout() {
    navigate("/");
    setProfileTabIsOpen(false);
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <Container page={page}>
      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <ResponsiveHeader
        profileTabIsOpen={profileTabIsOpen}
        setProfileTabIsOpen={setProfileTabIsOpen}
        logout={logout}
      />

      <HeaderDiv>
        {profileTabIsOpen && (
          <MenuContainer>
            {userIsAdmin && (
              <ProfileButton onClick={() => navigateToPage("/admin")}>
                Administração
              </ProfileButton>
            )}
            <ProfileButton onClick={() => navigateToPage("/config")}>
              Configurações
            </ProfileButton>
            <ProfileButton onClick={() => navigateToPage("/reservas")}>
              Reservas
            </ProfileButton>
            <ProfileButton onClick={() => logout()}>Sair</ProfileButton>
          </MenuContainer>
        )}
        <LogoImage onClick={() => navigate("/")} src={logo} alt="" />
        <NavButtons>
          <NavButton onClick={() => navigate("/")}>Página Inicial</NavButton>
          <NavButton onClick={() => navigate("/servicos")}>Serviços</NavButton>
          <NavButton onClick={() => navigate("/sobre")}>Sobre</NavButton>
          <NavButton onClick={() => navigate("/contato")}>Contato</NavButton>

          {loadingUserValidation ? (
            <NavButton>
              <ThreeDots color="#E1E1E1" height={13} width={51} />
            </NavButton>
          ) : (
            <>
              {userIsLoggedIn ? (
                <NavButton
                  onClick={() => setProfileTabIsOpen(!profileTabIsOpen)}
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
            </>
          )}
        </NavButtons>
      </HeaderDiv>

      {page === "home" ? (
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
      ) : (
        <About>{title}</About>
      )}
    </Container>
  );
}
