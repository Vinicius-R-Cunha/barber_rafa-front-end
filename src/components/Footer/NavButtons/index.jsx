import { FooterLogo, Container, NavButton } from "./style";
import logo from "../../../assets/logo.png";
import { memo } from "react";
import { renderDotsLoading } from "../../../utils/renderDotsLoading";

function NavButtons({
  navTo,
  openAuthenticationModal,
  loadingUserValidation,
  userIsLoggedIn,
}) {
  return (
    <>
      <FooterLogo src={logo} alt="" />
      <Container>
        <NavButton onClick={() => navTo("/")}>Página Inicial</NavButton>
        <NavButton onClick={() => navTo("/servicos")}>Serviços</NavButton>
        <NavButton onClick={() => navTo("/sobre")}>Sobre</NavButton>
        <NavButton onClick={() => navTo("/contato")}>Contato</NavButton>

        {loadingUserValidation ? (
          <NavButton>{renderDotsLoading()}</NavButton>
        ) : (
          <>
            {userIsLoggedIn ? (
              <NavButton onClick={() => navTo("/reservas")}>Reservas</NavButton>
            ) : (
              <NavButton onClick={openAuthenticationModal}>
                Entrar/Inscrever-se
              </NavButton>
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default memo(NavButtons);
