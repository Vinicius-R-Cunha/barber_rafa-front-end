import { Container, FooterLogo, NavButtons, NavButton } from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function Footer() {
  const { openAuthenticationModal, loadingUserValidation, userIsLoggedIn } =
    useContext(UserContext);

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
          <NavButton>
            <ThreeDots color="#E1E1E1" height={13} width={51} />
          </NavButton>
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
