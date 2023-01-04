import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import NavButtons from "./NavButtons";

import { useCallback } from "react";
import { useAuthModalContext } from "../../contexts/AuthModalContext";

export default function Footer() {
  const { loadingUserValidation, userIsLoggedIn } = useUserContext();
  const { openAuthenticationModal } = useAuthModalContext();

  const navigate = useNavigate();

  const navTo = useCallback((page) => {
    navigate(page);
  }, []);

  return (
    <Container>
      <NavButtons
        navTo={navTo}
        openAuthenticationModal={openAuthenticationModal}
        loadingUserValidation={loadingUserValidation}
        userIsLoggedIn={userIsLoggedIn}
      />
    </Container>
  );
}
