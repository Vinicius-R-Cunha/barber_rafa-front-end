import { Container, Logo, Icons, MenuContainer, NavButton } from "./style";
import { MdOutlineMenu } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { renderDotsLoading } from "../../utils/renderDotsLoading";

export default function ResponsiveHeader({
  profileTabIsOpen,
  setProfileTabIsOpen,
  logout,
}) {
  const {
    openAuthenticationModal,
    loadingUserValidation,
    userIsLoggedIn,
    userIsAdmin,
  } = useUserContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  function navigateToPage(page) {
    setMenuIsOpen(false);
    navigate(page);
  }

  return (
    <Container>
      <Logo src={logo} onClick={() => navigate("/")} alt="" />
      <Icons>
        {menuIsOpen ? (
          <IoClose onClick={() => setMenuIsOpen(!menuIsOpen)} />
        ) : (
          <MdOutlineMenu onClick={() => setMenuIsOpen(!menuIsOpen)} />
        )}

        {loadingUserValidation ? (
          renderDotsLoading()
        ) : (
          <>
            {userIsLoggedIn ? (
              <BsPersonCircle
                onClick={() => setProfileTabIsOpen(!profileTabIsOpen)}
              />
            ) : (
              <BsPersonCircle onClick={() => openAuthenticationModal()} />
            )}
          </>
        )}
      </Icons>

      {menuIsOpen && (
        <MenuContainer>
          <NavButton onClick={() => navigateToPage("/")}>
            Página Inicial
          </NavButton>
          <NavButton onClick={() => navigateToPage("/servicos")}>
            Serviços
          </NavButton>
          <NavButton onClick={() => navigateToPage("/sobre")}>Sobre</NavButton>
          <NavButton onClick={() => navigateToPage("/contato")}>
            Contato
          </NavButton>
        </MenuContainer>
      )}

      {profileTabIsOpen && (
        <MenuContainer>
          {userIsAdmin && (
            <NavButton
              className="flex-end"
              onClick={() => navigateToPage("/admin")}
            >
              Administração
            </NavButton>
          )}
          <NavButton
            className="flex-end"
            onClick={() => navigateToPage("/config")}
          >
            Configurações
          </NavButton>
          <NavButton
            className="flex-end"
            onClick={() => navigateToPage("/reservas")}
          >
            Reservas
          </NavButton>
          <NavButton className="flex-end" onClick={() => logout()}>
            Sair
          </NavButton>
        </MenuContainer>
      )}
    </Container>
  );
}