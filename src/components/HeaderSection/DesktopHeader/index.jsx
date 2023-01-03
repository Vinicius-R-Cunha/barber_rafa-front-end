import {
  Container,
  NavButtons,
  NavButton,
  LogoImage,
  MenuContainer,
  ProfileButton,
} from "./style";
import logo from "../../../assets/logo.png";
import { memo } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { renderDotsLoading } from "../../../utils/renderDotsLoading";

function DesktopHeader({
  openAuthenticationModal,
  navTo,
  userIsLoggedIn,
  userIsAdmin,
  loadingUserValidation,
  profileTabIsOpen,
  setProfileTabIsOpen,
  logout,
}) {
  return (
    <Container>
      <LogoImage onClick={() => navTo("/")} src={logo} alt="" />
      <NavButtons>
        <NavButton onClick={() => navTo("/")}>Página Inicial</NavButton>
        <NavButton onClick={() => navTo("/servicos")}>Serviços</NavButton>
        <NavButton onClick={() => navTo("/sobre")}>Sobre</NavButton>
        <NavButton onClick={() => navTo("/contato")}>Contato</NavButton>

        {loadingUserValidation ? (
          <NavButton>{renderDotsLoading()}</NavButton>
        ) : (
          <>
            {userIsLoggedIn ? (
              <NavButton onClick={() => setProfileTabIsOpen(!profileTabIsOpen)}>
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

        {profileTabIsOpen && (
          <MenuContainer>
            {userIsAdmin && (
              <ProfileButton onClick={() => navTo("/admin")}>
                Administração
              </ProfileButton>
            )}
            <ProfileButton onClick={() => navTo("/config")}>
              Configurações
            </ProfileButton>
            <ProfileButton onClick={() => navTo("/reservas")}>
              Reservas
            </ProfileButton>
            <ProfileButton onClick={logout}>Sair</ProfileButton>
          </MenuContainer>
        )}
      </NavButtons>
    </Container>
  );
}

export default memo(DesktopHeader);
