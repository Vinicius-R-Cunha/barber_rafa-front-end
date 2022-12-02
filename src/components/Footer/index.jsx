import { Container, FooterLogo, NavButtons, NavButton } from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { renderDotsLoading } from "../../utils/renderDotsLoading";

export default function Footer() {
  const { openAuthenticationModal, loadingUserValidation, userIsLoggedIn } =
    useUserContext();

  const navigate = useNavigate();

  return (
    <Container>
      <FooterLogo src={logo} alt="" />
      <NavButtons>
        <NavButton onClick={() => navigate("/")}>Página Inicial</NavButton>
        <NavButton onClick={() => navigate("/servicos")}>Serviços</NavButton>
        <NavButton onClick={() => navigate("/sobre")}>Sobre</NavButton>
        <NavButton onClick={() => navigate("/contato")}>Contato</NavButton>

        {loadingUserValidation ? (
          <NavButton>{renderDotsLoading()}</NavButton>
        ) : (
          <>
            {userIsLoggedIn ? (
              <NavButton onClick={() => navigate("/reservas")}>
                Reservas
              </NavButton>
            ) : (
              <NavButton onClick={() => openAuthenticationModal()}>
                Entrar/Inscrever-se
              </NavButton>
            )}
          </>
        )}
      </NavButtons>
    </Container>
  );
}
