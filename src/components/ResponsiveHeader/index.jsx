import { Container, Logo, Icons, MenuContainer, NavButton } from "./style";
import { MdOutlineMenu } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import { memo } from "react";

function ResponsiveHeader({
  openAuthenticationModal,
  navTo,
  loadingUserValidation,
  userIsLoggedIn,
  userIsAdmin,
  profileTabIsOpen,
  setProfileTabIsOpen,
  logout,
}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function navigateToPage(page) {
    setMenuIsOpen(false);
    navTo(page);
  }

  return (
    <Container>
      <Logo src={logo} onClick={() => navTo("/")} alt="" />
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
              <BsPersonCircle onClick={openAuthenticationModal} />
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
          <NavButton className="flex-end" onClick={logout}>
            Sair
          </NavButton>
        </MenuContainer>
      )}
    </Container>
  );
}

export default memo(ResponsiveHeader);
